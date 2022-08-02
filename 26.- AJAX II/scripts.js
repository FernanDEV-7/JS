const form = document.getElementById('form')
//*ID del formulario
const characters = document.getElementById('characters')
//*ID del select (seleccionador de opciones)
const table = document.getElementById('table')
//*ID de la tabla


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    getData(characters.value)
    /* getData(characters.children[characters.selectedIndex].value) */
})
//*creamos un "ejecutor",cada vez que se envie el formulario con una option, se detendra lo que se ejecuta por defecto que es recargar y se ejecutara la funcion getData, el valor del value del <select> que indiquemos antes de enviar el formulario sera el argumento de la llamada a getData, el argumento (el value) se usara para recibir la informacion del php, de manera especifica traera al heroe que tenga el id de la base de datos que coincida con el value.

const getData = (id) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    //* crear el objeto xhr , esto es copia y pega nada mas.

        /* 
        *Logica del algoritmo:
            *1.-primero obtendremos los datos de la db y crearemos las opcciones a escoger y obtener sus datos, como el id no esta definido se ejecutara todo y se crearan las opciones.

            *2.-cuando ya esten definidas las opciones con su respectivo value, llamaremos al heroe que tenga el mismo id que el value y crearemos el fragment que rellene la tabla.
        */

    if (id == undefined) {

        //!I) se abre la peticion, se especifica el metodo y luego la direccion. 
        xhr.open('GET', 'marvel.php')
        
        //!III) se escucha el evento load y se especifica que parte de la data queremos y luego que haremos con esa data.
        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            //! la data nos llega en string, debemos transformarla a JSON y especificar lo que queremos, luego guardarla en una constante para que javascript lo lea como un array y poder recorrerlo.
            console.log(dataJSON)

        //?CREACION DE UN FRAGMENT 7 PASOS:
        //?1.- creas el fragment.
        const fragment = document.createDocumentFragment()
        
        //?2.- creas un for of que recorra un iterable (<dataJSON>).
        for (const heroes of dataJSON) {

            //?3.- creas el o los elemento(s) html que sera rellenado despues, estableces que sea una const.
            const option = document.createElement('OPTION')

            //?4.- los option deben tener establecido su value, usamos .setAttribute('<atributo>', <valor a establecer>) el id lo obtiene de las caracteristicas del heroe que este iretando en ese momento.
                //ejemplo: dataJSON -> array[id:1, name:spiderman,etc]
            option.setAttribute('value', heroes.ID)

            //?5.- cambias el texto en blanco por el nombre del heroe.
            option.textContent = heroes.Name

            //?6.- rellenas el fragmento por cada iteracion
            fragment.appendChild(option)
        }
            //?7.- subes el fragmento relleno al padre contenedor
            characters.appendChild(fragment)
        })
    } else {
        //*especificamente le estamos pidiendo al backend que nos de el id que es el value del option, el backend le pide al db que le traiga el heroe que tiene el id seleccioando (el value del option), esa fila se traera y se convertira en JSON para que JS lo lea como un array y pueda recorrerlo.
        xhr.open('GET', `marvel.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)
        
        const fragment = document.createDocumentFragment()

        //?for de 1 iteracion, recorre todo el contenido de 1 solo objeto
        for (const heroe of dataJSON) {

            //?se crean los elementos de la tabla
            const row = document.createElement('tr') //*padre

            const dataName = document.createElement('td')
            const dataAlignment = document.createElement('td')
            const dataHometown = document.createElement('td')
            const dataGender = document.createElement('td')
            const dataFighting = document.createElement('td')

            //?se llena el texto de las tablas(importante, debe ser el mismo nombre de la caracteristica)
            dataName.textContent = heroe.Name
            dataAlignment.textContent = heroe.Alignment
            dataHometown.textContent = heroe.Hometown
            dataGender.textContent = heroe.Gender
            dataFighting.textContent = heroe.Fighting_Skills

            //?se añaden los elementos como hijos del padre (row).
            row.append(dataName)
            row.append(dataAlignment)
            row.append(dataHometown)
            row.append(dataGender)
            row.append(dataFighting)
            
            //?el padre se añadre al fragmento para que sus hijos sean el contenido
            fragment.append(row)
        }

        //* Nuevas secciones del algoritmo: 

/*             if(table.children[1]){
                table.removeChild(table.children[1])
            } */

            table.append(fragment)
        })

    }

    //!II) se envia la peticion.
    xhr.send()
}

//*getData() siempre debe estar abierto para que se ejecute la primera parte que es abrir la peticion y enviarla, recibir los datos y rellenar el selec con los option.
getData()


