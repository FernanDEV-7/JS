
/* 
 - Son estructuras que nos permiten almacenar varios datos y agruparlos.
 - Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
 - Se pueden mezclar tipos de datos, pero no es recomendable.
 - Se declaran con llaves cuadradas o corchetes []
 - Pueden declararse vacíos o con un contenido ya establecido
 - Pueden añadirse o eliminarse elementos en el momento que queramos
    let array = [] //Array vacío
    let numeros = [1,2,3,4,5] //Array con contenido inicial
*/

// let numeros = [1,2,3,4,5,6];

// let palabras = ['hola', 'estamos', 'en', 'youtube']

// console.log(numeros[3]);

// console.log(palabras[1])

// console.log(`${palabras[0]} tiene ${palabras[0].length} letras`);



/* 
    Arrays - Propiedad
        .length - devuelve el número de posiciones que contiene el array
*/

//console.log(numbers.length);

/*
    Arrays - Métodos
        Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

//let number = 4;
//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));


/*
    Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento
        .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

//console.log(numbers);
//let deleteElement = numbers.shift();
//console.log(numbers);
//console.log(deleteElement);
//console.log(numbers);
//numbers.pop();
//console.log(numbers);

/*
    Añadir elementos
        .push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
        .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/

/* let numbers =[1,2,3,4,5] */

// console.log(numbers);

// let newLenght = numbers.push(7);
// console.log(numbers);

// console.log(newLenght);

// let newLenght2 = numbers.unshift(0);

// console.log(numbers);
// console.log(newLenght2);

/*    
    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

/* console.log(numbers);
console.log(numbers.indexOf(2)); */

/* 
    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

/* console.log(numbers);
console.log(numbers.lastIndexOf(1));
 */
/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

/*       
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas 
*/


/* let arrayString = numbers.join(' ')
console.log(numbers.join('-'));
console.log(arrayString); */

/*     
    ?.splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        ?a - Indice de inicio
        ?b - Número de elementos (opcional)
        ?items - Elementos a añadir en el caso de que se añadan. (opcional)
*/


/* console.log(numbers); */
/* numbers.splice(3); elimina desde el indice 3 hasta el final */
/* numbers.splice(2,2) */ /* elimina desde la posicion 2 el numero devalores que le indiquemos */
/* numbers.splice(2,2,10,11)*/ /* Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posicion a */
/* numbers.splice(2,0,10,11) */ /* si no se le añade nada en el argumento b, solo estariamos añadiendo items al array a partir del numero que se le declare al argumento a*/
/* console.log(numbers); */

/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/
let numbers =[1,2,3,4,5,1]
let newnumbers = numbers.slice(2,4);
/* 
!la ultima posicion no esta incluida*/
console.log(numbers);
console.log(newnumbers);

