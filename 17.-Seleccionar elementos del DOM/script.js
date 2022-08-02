
/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/* const title = document.getElementById('title')

title.textContent = 'DOM - Accediendo a nodos' */

//*cambiamos el valor de text content de title - obtenemos un elemento por su id


/* const paragraph = document.querySelector('.paragraph')

const span = document.getElementById('title').querySelector("span")

console.log(span.textContent); */

//*con punto decendemos del padre hasta el elemento que queremos acceder - seleccionamos el elemento especifico

/* const paragraphs = document.querySelectorAll('.paragraph') */

/* paragraphs[0].style.color = 'red' */

//*el nodelist tiene indice pero NO es un array, asi que no se pueden usar los metodos de los arrays directamente

//!.style.color se usa para añadir estilos desde el script, no se recomienda usarlo

/* const paragraphsSpread = [...document.querySelectorAll('.paragraph')] */

/* paragraphsSpread.map(p =>p.style.color = 'green') */

//*pero si podemos usar el spread operator para extender un array y incluir los elementos del nodelist que retorna querySelectorAll

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphsArray.map(p =>p.style.color = 'blue') 

console.log(paragraphs)

//*Esta es la mejor manera de usar querySelectorAll para tratarlo como un array, usando Array.from y luego la ubicacion del querySelectorAll 