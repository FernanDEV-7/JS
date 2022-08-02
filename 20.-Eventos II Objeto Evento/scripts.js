const form = document.getElementById('form')

const input1 = document.getElementById('input1')

const button = document.getElementById('button')

/* input1.addEventListener('keyup', (e) => {
    console.log(e)
})
 */
/* addEventListener('click', (e) => {
    console.log(e);
}) */

/* button.addEventListener('click', (e) =>{
    console.log(e.target);
}) */

const gallery = document.getElementById('gallery')

/* gallery.addEventListener('click', (e) =>{
    e.target.classList.add('red');
})
 */

//* desde target se accede a classList y el metodo .add añade la clase red 

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('el formulario se a enviado')
})

//* e.preventDefault() previene que suceda lo que sucede normalmente :v

const link = document.getElementById('link')

link.addEventListener('click', (e) =>{
    e.preventDefault()
    button.click()
})

//*aqui estamos diciendole que si le das click en el link, fuerza a que suceda el evento click en button (asi se puede forzar eventos)

button.addEventListener('click', () =>{
    input1.value = 'haz hecho click'
})

//*aqui con un click en button estamos cambiando el valor de input1