/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)
Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.getElementById('title')

const nombre = document.getElementById('nombre')

/* nombre.getAttribute('type')

nombre.setAttribute('type', 'number') */

//* con get Attribute retorna el atributo del elemento y con set se especifica el atributo y su nuevo valor para cambiarlo


/* title.classList.add('main-title','other-title') */
/* title.classList.remove('title') */

//* add y remove eliminan o añaden clases del elemento html obtenido por su id 

/* if(title.classList.contains('title')) console.log('title tiene la clase title')
else console.log('title no tiene la clase title') */

//* contains retorna un bool si es que el argumento especificado se encuentra en la lista de clases

/* title.classList.replace('title','main-title') */

//*replace es una manera facil de reemplazar clases, en vez de remover y añadir solo reemplazamos

/* console.log(title.innerHTML) */

//*innerHTML recoge todo el contenido y las etiquetas html dentro

/* console.log(title.textContent) */

//*textContent solo recoge el texto plano del elemento

console.log(nombre.value.lenght) 

/* console.log(title)

console.log(nombre) */









