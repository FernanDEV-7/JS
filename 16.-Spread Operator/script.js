/*
?Spread Operator (operador de expansión)
?Su sintaxis es ...
*/

/* const numbers = [-12,2,3,23,43,2,3]

console.log(...numbers) */

//Enviar elementos en un array a una función

/* const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd) */


//!Añadir un array a otro array

/* let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

let newUsers = ['marta', 'jaime', 'laura']

users.push(...newUsers)

console.log(users);  */

//!Copiar arrays

/* let arr1 = [1, 2, 3, 4,5]
let arr2 = [...arr1]
console.log(arr2);  */

/* 
*El contenido del array 1 ahora esta copiado en el array2  */

//Concatenar arrays
    /* let arr1 = [1, 2, 3, 4, 5]
    let arr2 = [6, 7, 8]
    let arrConcat = [...arr1, ...arr2]
    console.log(arrConcat) */


// !Enviar un número indefinido de argumentos a una función (parámetros REST)

/* const restParms = (...numbers) => {
console.log(numbers)
}
restParms(1,2,3,4,5,6,7,8) */

//!Libreria math

/* const numbers = [-12,2,3,23,43,2,3]

console.log(Math.max(...numbers)) */

//!Eliminar elementos duplicados

const numbers = [-12,2,3,23,43,2,3]

console.log([...new Set(numbers)])

/* 
*Los conjuntos no pueden tener elementos duplicados (como los conjuntos :v pertenece o no pertenece) */

//*se expande el array y se le añade unos elementos sin repetir con ...new Set(numbers)