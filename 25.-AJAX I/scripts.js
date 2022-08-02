/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */


const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    //*este objeto XMLHttpRequest() funciona en todos los navegadores actuales
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    //* este solo en los antiguos

    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/users')
    //*https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    //* xhr open(method, url)

    xhr.addEventListener('load', (data) =>{
        //*El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar. osea que cuando ya a cargado toda la informacion se dispara el evento, la informacion obtenida se guarda en la variable data
       const dataJSON = JSON.parse(data.target.response)
        //* JSON.parse sirve para transformar los datos obtenidos que son string a JSON
        //* data.target.response solo estamos yendo al nodelist especifico que tiene los datos
        //* dataJSON ahora es un array de objetos
        
       const list  = document.getElementById('list')

       for(const user_info of dataJSON){
            const listItem = document.createElement('li')
            //*crea un li y ponle un text content
            listItem.textContent = `${user_info.id} - ${user_info.name}`
            list.appendChild(listItem)
            //* ese nuevo li rellenado sera hijo del padre 
       }
    })

    xhr.send()
    //*enviamos la peticion (la peticion es asincrona)
})





