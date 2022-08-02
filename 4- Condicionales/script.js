
/* Condicional simple */

let num = 0;

if(num>0){
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);
}

/* Condicional compuesto, cuanto se añade el condicional else if, debe ir con su respectiva condicion a cumplir*/

if(num>0){
    console.log(`${num} es mayor que 0`);
}else if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual 0`);
}

/* Operadores lógicos */

/* && and */
/* || o */

let num1 =5;
let num2 =-3;

if (num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y ${num2} es 0`);
    }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es 0`);
    }
}else{
    if(num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
    
}

let word = 'hola';

if(word.length > 4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word}tiene 4 letras`);
}

let respuesta = true;

if(respuesta==true) console.log(`respuesta tiene el valor true`);

if(respuesta) console.log(`respuesta tiene el valor true`);
if(!respuesta) console.log(`respuesta tiene el valor false`);

// en booleanos es mas facil usar el signo de negacion adelante





