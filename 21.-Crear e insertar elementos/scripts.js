//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/* const itemList = document.createElement('LI')

itemList.textContent = 'Lunes' */

/* daysList.appendChild(itemList) */

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

//*añadir etiquetas HTML a un elemento

const fragment = document.createDocumentFragment()

//* crear fragmentos de html que luego vamos a subir

for(const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)
}

//*La variable de control day recorrera cada uno de los elementos del array days , luego se define una constante itemList que tendra como valor la creacion de un elemento li en el documento, luego esos li tendran como contenido el valor de la variable de control que esta recorriendo days y por ultimo cada uno de los li rellenados con su respectivo dia se van a subir al fragment con el metodo appendChild y como argumento el itemlist.

daysList.appendChild(fragment)

//* Por ultimo una vez rellenado el fragment lo subimos al elemento que tenga su respectivo id, si lo hicieramos con un ciclo for gastariamos muchos recursos, por que con cada iteracion el DOM dibujaria completamente todo el arbol de nuevo hasta que termine el ciclo, asi que es mejor que el for sirva para añadir los elementos a una variable y luego subir esta al elemento deseado de una sola.

/* 
*Recapitulando

*1.- Creas tu fragmento que quieres rellenar y subir con document.createDocumenFragment() 

*2.- Creas un for of que recorra el array de los elementos que quieres subir (days).

*3.- Creas una const (itemList) que albergue el elemento con createElement('<elemento HTML>') al cual vas a rellenar su contenido.

*4.- Rellenas el elemento (li) con el metodo .textContent o setAttribute ,etc y su valor sera el valor de la variable de control (day).

*5.- Se sube al fragmento los elementos rellandos con el metodo .appendChild(<itemList>)

*6.- Finalmente subes al elemento contenedor (dayList) el fragmento de los elementos rellenados (fragment) con el metodo appendChild. */

const fragment1 = document.createDocumentFragment()

for(const day of days){
    const selecItem = document.createElement('option')
    selecItem.setAttribute('value', day.toLowerCase())
    selecItem.textContent = day   
    fragment1.appendChild(selecItem)
}
selectDays.appendChild(fragment1)

//*7.- si vas a llenar un option como en este caso, debes cambiar su value tambien, ya que eso es lo que se lleva al backend, en este caso debemos añadir un paso mas que es rellenar el atributo value de option con el metodo setAttribute( <argumento uno el atributo a cambiar> y 2 <el iterable pero en minusculas, asi que usaremos toLowerCase()>).

console.log(fragment1)





