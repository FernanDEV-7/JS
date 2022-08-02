// Strings

let cadena = 'hola mundo';

/* propiedades
lenght -> devuelve la longitud de la cadena*/

/* console.log(cadena.length); */

/*Metodos
todos los metodos devuelven una cadena nueva, la cadena original NO SERA MODIFICADA.*/

// toUpperCase() -> devuelve la cadena en mayusculas 

/*console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toUpperCase();

console.log(cadenaMayus)

console.log(cadena.replace('mundo', 'youtube')); */

/*
substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)
Si no se incluye el fin extrae hasta el final.
*/

console.log(cadena.substring(3));

console.log(cadena.substring(3,7));

/*slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde ATRAS
Si no se incluye el final extrae hasta el final
	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/

/* console.log(cadena.slice(0,4));
console.log(cadena.slice(0,-6)) */;

/*
trim()-> Elimina los espacios al inicio y al final de la cadena
*/

/* let cadena2 = '      hola youtube estamos trabajando con cadenas     ';

console.log(cadena2.trim()); */

/*
--ES6--
startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuleve true o false
*/

/* console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('m', 5));

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4)); */

/*
includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
*/

/* console.log(cadena.includes('n'));
console.log(cadena.includes('a', 5));
console.log(cadena.includes('a', 2)); */

/*
repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

/* let cadena3 = 'hola';

console.log(cadena3.repeat(3)) */;


/*Template Strings*/

/* let nombre = 'Juan';
let apellido = 'Gómez';
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años, el año que viene tendras ${++edad}`); */
