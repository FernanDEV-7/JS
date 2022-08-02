/* Bucles */

/* 
    Determinados
    bucle for of / for in
   ! of devuelve el contenido del indice
    !in devuelve el indice
    ! 3 === compara si son iguales tambien con el tipo de dato (int,str,etc)
    for(let variable of estructura){
        Código a ejecutar
    }
    Palabras reservadas de bucles
        !break - Rompe el bucle
        !continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

let names = ['Paco', 'José', 'Paula', 'María']

/* for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index)
}
 */
for(let name of names){
/*     if(name==='Paula'){
        continue
    } */
    console.log(name);
}

