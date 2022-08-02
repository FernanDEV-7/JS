/*
Objeto Math
Objeto estático
Tenemos que usar su nombre para utilizarlo
Propiedades:
    Math.E - Math.Pi
Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) (retorna el redondeo hacia el alza)
    Math.floor(x) (retorna el redondeo hacia la baja)
    Math.pow(x, y) Devuelve la potencia de x elevado a y (base , exponente)
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/

console.log(Math.E);
console.log(Math.PI);

let num = 5.3;

console.log(Math.abs(-num));

console.log(Math.ceil(num));

console.log(Math.pow(2,3));

console.log(Math.round(Math.random()*100));

//console.log(Math.random() * (max - min)+min); (formula para generar numeros aleatorios)

console.log(Math.round(Math.random() * (10 - 5)+5));

console.log(Math.sign(35)); // -1 | 0 | 1





