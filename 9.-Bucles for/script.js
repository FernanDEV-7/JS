/* Bucles */

/* 
    Determinados
    bucle for
    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento
    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [500,12,36,480,58,666]
/* console.log(numbers[0])
console.log(numbers.length); */
for(let i=0;i<=numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`)
}
