/* 
!Arrays - Métodos II
?.from(iterable) - Convierte en array el elemento iterable
?.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
?.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
?.some(callback) - Comprueba si al menos un elemento del array cumple la condición
?.every(callback) - Comprueba si todos los elementos del array cumplen la condición
?.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
?.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
?.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/* FROM */
/* let word = 'Hola mundo'
console.log(Array.from(word));
console.log(word.split('')); */


/* SORT */
/* const letters = ['b', 'c', 'z', 'a']
const numbers = [1,8,100,300,3]
console.log(letters.sort())
console.log(numbers.sort())
console.log(numbers.sort((a,b)=>a-b))
function menorMayor(a, b) {
if (a-b < 0) return -1;
if (a-b > 0) return 1;
if(a == b) return 0;
}
function mayorMenor(a, b) {
if (b-a < 0) return -1;
if (b-a > 0) return 1;
if(b == a) return 0;
} */

/* const numbers = [12,25,47,84,98]

numbers.forEach((r) => console.log(r))
numbers.forEach((r,i) => console.log(`${r} esta en la posicion ${i}`)) */

/* 
*el primer parametro es la variable de control y el segundo es el indice*/

/* const words =['html','css','javascript','php']

console.log(words.some(word => word.length >8))
console.log(words.every(word => word.length >2)) */

/* 
*some y every recorren el array y retornan un bool segun la condicion*/

/* const numbers = [1,2,3,4,5] */

/* const numbers2 =  numbers.map((number)=>number*2)

console.log(numbers2) */

/* 
*map devuelve un array nuevo y modificado por la condicion */

/* const numbers3 = numbers.filter(number => number > 80)

console.log(numbers3) */

/* 
*Devuelve un array nuevo filtrado por la condicion */

/* console.log(numbers.reduce((a,b)=>a*b)) */

/* 
*devuelve una sola condicion segun la condicion*/

const users = [
    {
        name: 'user1',
        online: true
    },
    {
        name: 'user2',
        online: true
    },
    {
        name: 'user3',
        online: false
    },
    {
        name: 'user4',
        online: false
    },
    {
        name: 'user5',
        online: false
    },
    {
        name: 'user6',
        online: true
    },
]


const usersOnline = users.reduce((cont,user) => {
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`)

/* 
*reduce devuelve un unico valor, trabaja con pares,

!cuando se trabaja con objetos dentro de un array, al terminar de definir un objeto se coloca coma y luego se coloca el siguiente (se usan llaves)

!cuando se define una funcion, sus parametros y la sintaxis simplificada (const <func> = () => <ejecutar>) y se añade solo una linea o una sola cosa por hacer no se necesita llaves, si seran mas de una condicion o linea se usa una llave

!https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*en la funcion definida arriba se especifica que la variable usersOnline tendra como valor el resultado de users.reduce que tiene como argumentos cont, user (cont = acumulador/valor anterior y user = valor actual) la condicion es si user.online (propiedad del objeto) es true, le subira 1 punto al contador, despues devuelve cont, al finalizar la condicion se le añade el contador inicial especificando que empieza desde 0 el acumulador.

*/
/* 
?const array1 = [1, 2, 3, 4];

?// 0 + 1 + 2 + 3 + 4
?const initialValue = 0;
?const sumWithInitial = array1.reduce(
 ?(previousValue, currentValue) => previousValue + currentValue,
 ?initialValue
); */

/* 
?console.log(sumWithInitial); */
// expected output: 10

/* 
sintaxis:
*arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial]) */

/* 
! acumulador  = valor previo  ((a,b) - luego - (b,c) a es el valor previo luevo b y por ende ese es el valor que se va  acumulando, luego de especficar lo que hara se puede colocar el valor inicial para especificar con que valor empieza, si no se especifica el valor anterior sera el primer valor del array y el valor inicial sera el segundo*/
