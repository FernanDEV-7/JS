/* 1 - 
?Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
*Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings */

/*
!Solucion Dorian 1 */

/* let nombre = prompt('Ingrese su nombre');
let edad = parseInt(prompt('Ingrese su edad'));

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad+1} años.`)
 */

/* 
*Lo unico a comentar aqui es que no sabia que con parseInt convertias el string a int, haciendo eso cuando sumas +1 no se suma como cadena si no como numero*/

/* 
!Solucion Fernan 1*/

/*  nombre = prompt('Introduce tu nombre');
edad = prompt('Introduce tu edad');
 
console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendras ${++edad} años.`)  */

/* 
*Yo lo solucione usando el operador de incremento que al parecer fuciona*/


/*
?2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    *triángulo = b * h/2
    *rectángulo = b * h
    *círculo = π * r2 (pi * radio al cuadrado) */

/* 
!Solucion Dorian 2 */

/* let figure = prompt('introduce la figura geometrica que quieres calcular su area: triangle,rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case'triangle':
        base=prompt('Introduce la base del triangulo')
        height=prompt('Introduce la altura del triangulo')
        console.log(`El area del triangulo es ${(base*height)/2 }`);
        break

    case'rectangle':
        base=prompt('Introduce la base del rectangulo')
        height=prompt('Introduce la altura del rectangulo')
        console.log(`El area del rectangulo es ${base*height }`);  
        break  

    case 'circle':
        radio = prompt('Introduce el radio del circulo')

        console.log(`El area del circulo es ${Math.PI * Math.pow(radio, 2)}`)
        break

    default: console.log('la figura geometrica no es valida')
} */

/* 
*Aqui Dorian resuelve el ejercicio con un condicional switch, otra cosa es que usa la propiedad PI del modulo Math, para repasar un condicional switch ejecuta un caso siempre en cuando el caso sea igual a la condicion que evalua, al final de cada caso debe ir un break para finalizar, y por ultimo debe tener un default en caso que ningun caso se cumpla*/

/* 
!Solucion Fernan 2 */

/* figura = prompt('Introduce el nombre de la figura que quieras calcular su area (triangulo - rectangulo - circulo)')

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
}  */

/* 
*Resolvi el problema usando un condicional if, (ademas especifique que el resultado son cm² xd) hago mas pasos como definir PI y definir el radio² y tambien redondear el area */

/* 
?3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    *si el número es 5 el resultado será:
        *1 - es impar
        *2 - es par
        *3 - es impar
        *4 - es par
        *5 - es impar
 */

/* 
!Solucion Dorian 3 */

/* let num = parseInt(prompt('introduce un numero'))

for(let i = 1; i<=num; i++){
     if(i%2==0){
        console.log(`${i} - es par`);
     }else{
        console.log(`${i} - es impar`)
     }
} */

/* 
*Dorian resuleve este problema en menos lineas solo definiendo un caso, ya que de cumplirse esa condicion no podria ser de la otra condicion (un numero es par cuando su resto es 0) */

/* 
!Solucion Fernan 3 */

/* numero = prompt('Ingresa un numero para devolverte todos los numeros pares e impares');

for(let i=0;i<=numero;++i){
    if(i == 0){
        continue
    }else if(i%2 == 1){
        console.log(`${i} - es impar`)
    }else if(i%2 == 0){
        console.log(`${i} - es par`)
    }
}  */

/* 
*Aqui yo me complico en mi solucion por que empece la variable i con 0 y como no me funcionaba tuve que añadir ese continue para que se saltara esa iteracion (no se me ocurrio empezar con 1 xd) ademas defino los 2 casos cuando el segundo es redundante */

/* 
?4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    *Un número primo es aquel que solo es divisible por sí mismo y la unidad */


/* 
!Solucion Dorian 4 */


/* let num = parseInt(prompt('introduce un numero'));

let divisores = 0;

if (num === 1) console.log('el numero 1 no es valido');
else{

    for(let i=2; i<num; i++){
        if(num % i == 0){
            console.log(`${num} / ${i} = ${num/i} No es primo`);
            divisores++
            break
        }
    }
}

if(divisores == 0) console.log(`${num} es primo`) */

/* 
*aqui dorian introduce una variable por fuera del ciclo que en caso de que se detecten numeros divisiles entre 2  (numeros pares) aumente, en el caso que no aumente significa que el numero introducido es primo, la construccion del ciclo empieza desde 2 hasta que sea verdadero que sea menor que el numero introducido por que si es menor o igual, se cumpliria la condicion de ser primo  (5mod5 = 0) y por consola saldria 5/5 no es primo. */

/* 
!Solucion Fernan 4*/

/* numeroprimo = prompt('Ingrese un numero entero mayor que 1 para decirle si es primo o no')


if(numeroprimo > 1){
    if((numeroprimo%2) == 0){
        console.log(`${numeroprimo} no es primo`);
    }else if(numeroprimo/numeroprimo == 1){
        console.log(`${numeroprimo} es primo`)
    }else{
        console.log('numero no valido')
    }
}  */

/* 
*Yo lo solucione con una condicion if donde el valor ingresado debe ser mayor a 1*/

/* 
?5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    *El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120 */

/* 
!Solucion Dorian 5 */

/* let num = parseInt(prompt('Introduce un numero'))

let result = 1

for(let i = num; i=>1; i-- ){
    result *= i
}

console.log(`El Factorial de ${num} es ${result}`); */

/* 
*aqui la logica es simple, la variable de control va disminuyendo y con cada iteracion se multiplica con su anterior valor y se guarda en result */

/* 
!Solucion Fernan 5 */

/* n = prompt('ingrese un numero entero mayor que 0 para calcular su factorial')

let t = 1;


for(let i = n;i>1;--i){
    t = t *i;
    console.log(t)
}

console.log(`el factorial de ${n} es ${t}`) */

/* 
*Aqui no pude resolverlo por mi cuenta, me tarde 2 horas lo unico que acerte fue en el ciclo, luego tuve que ver un tutorial */

/* 
?6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */

/* 
!Solucion Dorian 6 */


/* let suma = 0
let count = 0

while(suma<50){
    suma += parseInt(prompt('introduce un numero'))

    count++
}

console.log(`La suma total es de: ${suma}`)
console.log(`El total de numeros introducidos es ${count}`) */

/* 
*Mientras se cumpla la condicion se seguira introduciendo numeros */

/* 
!Solucion Fernan 6 */

/* let n = 0

let c = 0

while(n<50){
    input = parseInt(prompt('introduce un numero'))
    n += input
    c++

}
console.log(`introdujiste ${c} numeros`)
console.log(`llegaste a ${n}`) */

/* 
*Aqui la solucion es bastante parecida  */

/* 
?7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    *-la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    *-el array de pares e impares */

/* 
!Solucion Dorian 7 */


/* const num = [1,2,3,4,5]

let pares = []

let impares = []

for(const i of num){
    let random = Math.round(Math.random()*10+1)

    const result = i*random

    console.log(`${i} x ${random} = ${result}`)

    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}

console.log('los numeros pares son')
console.log(pares)
console.log('los numeros impares son')
console.log(impares) */

/* 
* un ciclo que recorre el array num, el valor de i en cada iteracion es multiplicado por la formula de un numero aleatorio del 1 al 10, ademas en el ciclo se evalua si es par o impar y se coloca en un array*/

/* 
!Solucion Fernan 7 */

/* let a1 = [5,7,3,6,8]

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
*el a2 esta de mas por que pude definirlo dentro del ciclo, por lo demas es bastante parecido solo que yo especifique la condicion de los impares cuando no era necesario. */

/* 
?8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

*const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; */

/* 
!Solucion Dorian 8 */

/* const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt('introduce tu dni')

if(dni.length == 8 && parseInt(dni)>0){
    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`)
} */

/* 
*Dorian usa length y el numero de dni en int para hacer la condicion, tambien usa el resultado de dni%23 como indice del array letras*/


/*
!Solucion Fernan 8*/

/* const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt('introduzca su dni (solo 8 numeros, no se admiten valores negativos')



if(dni>0 && dni<=99999999){
    let a = dni%23;
    console.log(a);
    let num = letras.slice(a,(a+1));
    console.log(`Al DNI ${dni} le corresponde la letra ${num}`);
} */

/* 
*yo pongo en la condicion que sea mayor que 0 y menor que el numero mas alto de 8 cifras (cuando resolvi el problema no sabia que se podia colocar parseInt) luego la variable -a- obtendra el numero con el que obtendre la letra, me complique con la obtencion de la letra usando el metodo .slice especificando que empiece con el valor de -a- y finalice con a+1 considerando que el metodo si incluye el inicio pero no el final (si no se incluye el final, extrae hasta el final del array) */


/* 
?9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra. */

/* 
!Solucion Dorian 9 */

/* let palabra =  prompt('Introduce una palabra')

let consonantes = 0
let vocales = 0

for(let letra of palabra){

    if(letra == 'a' || letra == 'e' || letra == 'i'|| letra == 'o' || letra == 'u'){
        ++vocales
    }else{
        ++consonantes
    }
}

console.log(`Tu palabra ${palabra} tiene ${vocales} vocales y ${consonantes} consonantes`) */

/* 
*se definen variables de consonantes y vocales, luego se crea un ciclo que recorre las letras del string palabra con la condicion que evalua si es vocal o no ya que es la que menos elementos tiene, si es asi aumenta en 1 la variable de vocales, de lo contrario la letra sera una consonante*/

/* 
!Solucion Fernan 9 */

/* let palabra = prompt('introduce una palabra').toLowerCase();

let cons = 0;
let vocales = 0;

for(let l of palabra){
    if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'){
        vocales += 1
    }else{
        cons +=1
    }
}

console.log(`el numero de consonantes es ${cons} y el numero de vocales es ${vocales}, la longitud de la palabra -${palabra}- es ${palabra.length} letras`); */

/* 
*yo intente crear un array con las letras introducidas con el prompt y luego evaluar si estaban en 2 arrays, una donde su contenido eran las vocales y al otra donde estaban las consonantes, no supe como hacerlo, luego intente crear un array con las vocales y ver si la palabra tenia uno de esos elementos pero me resulto mas facil hacerlo de la manera en la que esta resulta ahora que es igual a la de Dorian. */

/* 
?10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */

/* 
!Solucion Dorian 10 */


/* const colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

const color = prompt('Introduce un color')

if(colors.indexOf(color) !== -1){
    console.log('Tu color se encuentra en el array')
}else{
    console.log('Tu color no esta definido');
} */

/* 
*Dorian lo resuelve de manera facil creando una condicion que usa el array con el metodo indexOf y con el argumento color, recordando que si indexOf retorna 1 significa que si esta el argumento en el array y si no retorna -1 */

/* 
!Solucion Fernan 10 */

/* let colores =  ["azul", "amarillo", "rojo", "verde", "rosa"]

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
}   */

/* 
*Mi solucion es un poco mas complicada, creo un contador, luego hago un ciclo que recorra los elementos de array colores, luego comparo la variable de control que con cada iteracion recorre el array con el color introducido por el usuario, si el contador llega a 5 que es el numero de elementos del array entonces el color no esta en la lista*/



















