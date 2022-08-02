/* 

!ejercicio 1
nombre = prompt('Introduce tu nombre');
edad = prompt('Introduce tu edad');
 
console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendras ${++edad} años.`) */

/* 
!ejercicio2

figura = prompt('Introduce el nombre de la figura que quieras calcular su area (triangulo - rectangulo - circulo)')

if(figura == 'triangulo'){
    base = prompt('introduce la base');
    altura = prompt('introduce la altura')
    area = (base * altura)/2
    console.log(`${area}cm²`)
}else if(figura == 'rectangulo'){
    base = prompt('introduce la base');
    altura = prompt('introduce la altura')
    area = (base * altura)
    console.log(`${area}cm²`)
}else if(figura == 'circulo'){
    pi = 3.1416;
    radio = prompt('introduce el radio')
    radio2 = Math.pow(radio,2)
    area = (pi*radio2)
    arear = Math.round(area)
    console.log(`${arear}cm²`)
}else{
    console.log('introduzca una de las 3 figuras')
} */


/* 
!ejercicio 3

numero = prompt('Ingresa un numero para devolverte todos los numeros pares e impares');

for(let i=0;i<=numero;++i){
    if(i == 0){
        continue
    }else if(i%2 == 1){
        console.log(`${i} - es impar`)
    }else if(i%2 == 0){
        console.log(`${i} - es par`)
    }
} */

/* 
!ejercicio 4

numeroprimo = prompt('Ingrese un numero entero mayor que 1 para decirle si es primo o no')


if(numeroprimo > 1){
    if((numeroprimo%2) == 0){
        console.log(`${numeroprimo} no es primo`);
    }else if(numeroprimo/numeroprimo == 1){
        console.log(`${numeroprimo} es primo`)
    }
} */





/*
!ejercicio 5

n = prompt('ingrese un numero entero mayor que 0 para calcular su factorial')

let t = 1;


for(let i = n;i>1;--i){
    t = t *i;
    console.log(t)
}

console.log(`el factorial de ${n} es ${t}`) */

/* 
!ejercicio 6

let n = 0

while(n<50){
    input = parseInt(prompt('introduce un numero'))
    n += input
    console.log(`introdujiste ${input}`)
}

console.log(`llegaste a ${n}`) */




/* 
!ejercicio7

let a1 = [5,7,3,6,8]

let a2 = 0

let pares = []

let impares = []


for(let i of a1){
    let random = (Math.round(Math.random()*10));
    a2= i * random ;
     
    console.log(`${i} x ${random} = ${a2}`)
   
    if(a2%2 == 0){
        pares.push(a2)
    }else if(a2%2 == 1){
        impares.push(a2)
    }
}

console.log('array de pares:')
console.log(pares)
console.log('Array de impares:')
console.log(impares) */



/* 
!ejercicio 8

let const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt('introduzca su dni (solo 8 numeros, no se admiten valores negativos')



if(dni>0 && dni<=99999999){
    let a = dni%23;
    console.log(a);
    let num = letras.slice(a,(a+1));
    console.log(`Al DNI ${dni} le corresponde la letra ${num}`);
} */


/*
!ejercicio 9

let palabra = prompt('introduce una palabra').toLowerCase();

let cons = 0;
let vocales = 0;

for(let l of palabra){
    if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'){
        vocales += 1
    }else{
        cons +=1
    }
}

console.log(`el numero de consonantes es ${cons} y el numero de vocales es ${vocales}, la longitud de la palabra -${palabra}- es ${palabra.length} letras`);
 */

/* 
!ejercicio 10

let colores =  ["azul", "amarillo", "rojo", "verde", "rosa"]

ucolor = prompt('introduce un color').toLowerCase();

let c = 0

for(let i of colores){

    if(i===ucolor){

        console.log(`Tu color ${ucolor} si esta en la lista`);

    }else if(i != ucolor){
        
        c +=1;
    }
    if(c == 5){
        console.log(`Tu color ${ucolor} no esta en la lista`);
    }
}    */
























