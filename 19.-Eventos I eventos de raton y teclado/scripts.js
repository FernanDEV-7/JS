/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/


const button = document.getElementById('button')

/* button.addEventListener('click',()=>{
    console.log('CLICK');
}) */

/* button.addEventListener('dblclick', ()=>{
    console.log('DOBLE CLICK')
}) */

const box = document.getElementById('box')

/* box.addEventListener('mouseenter', ()=>{
    box.classList.replace('red','green')
})

box.addEventListener('mouseleave', ()=>{
    box.classList.replace('green','red')
    
}) */

//* replace cuando entra y replace invertido cuando sale

/* box.addEventListener('mousedown', ()=>{
    console.log('Haz pulsado en la caja')
})

box.addEventListener('mouseup', ()=>{
    console.log('Haz soltado el boton izquierdo en la caja')
})

box.addEventListener('mousemove', ()=>{
    console.log('estas moviendo el raton en la caja')
}) */


const elinput = document.getElementById('elinput')

elinput.addEventListener('keydown', ()=>{
    console.log('haz pulsado una tecla')
})

elinput.addEventListener('keyup', ()=>{
    console.log('haz soltado una tecla una tecla')
})

elinput.addEventListener('keypress', ()=>{
    console.log('estas pulsando una tecla')
})





