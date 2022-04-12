//Dados 2 variables booleanas:
// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

const booleano1 = true;
const booleano2 = false;

const boleanoAnd = booleano1 && booleano2;

const booleanoOr = booleano1 || booleano2;

const booleanoNot= !booleano1;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)


const booleanoMix0= booleanoOr && (booleano1 || ( !booleano1 && !booleano2 ));


//2.Operadores
//Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
//Crear variable valorResto cuyo valor sea el resto de 17 entre 7

valorDivision = 17/3;

console.log(valorDivision.toFixed(2));

valorResto = 17%7;

console.log(valorResto);

//3.Lógica de programación
//Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

const A = 9;
const B = '9';

if (A == B){
    console.log('Son iguales');
    }else {
        console.log('No son iguales');
    }

    if (A === B){
        console.log('Son iguales');
        }else {
            console.log('No son iguales');
        }


//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

const mochila = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

if (mochila.length > 10){
    console.log('No puedo cargar con tantas cosas');
}  else if (mochila.length > 2){
    console.log('Que bien voy con mi mochila');
}   else
    console.log ('Creo que no necesito una mochila');


//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

let contarHasta10 = 0

    

for (let i = 1; i <= 10; i++){
     contarHasta10 = i
     console.log(contarHasta10)
}

//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

let diaFestivo = false;

diaFestivo == true ? console.log('Es festivo'):console.log('No es festivo');

if (diaFestivo==true) {
    console.log('Es festivo')
} else {
    console.log('No es festivo');
}


//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = []

for (let i = 4; i < 18; i++){
    arrayBucle.push(i)
}
console.log(arrayBucle);

//Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let resultado = 0

for (let i = 0; i < arrayBucle.length; i++){
     resultado = arrayBucle[i] + resultado
} 

console.log(resultado);

//Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos


const cosas = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

for (let cosa of cosas) {
    console.log (cosa);
}

for (let x in cosas) {
    console.log(cosas[x]);
}

//Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
//No sé cómo hacer para que el output de patata me lo muestre en varias líneas y no en una sola



let x = 0;


while (x < 20) {
    
    if (x % 3 == 0)
        console.log('patata')    
        x++;
}   

/*Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.
*/


let nota = prompt('Introduce un numero');

switch (nota){
    case'1':
    case'2':
    case'3':
    case'4':
        console.log('Insuficiente');
        break;
    case'5':
    case'6':
        console.log('Suficiente');
        break;
    case'7':
    case'8':
        console.log('Notable');
        break;
    case'9':
    case'10':
        console.log('Sobresaliente');
        break;
    default: console.log('Nota Incorrecta');
}       

//Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.




function rest(a, b){
    return a-b
}

console.log(rest(4,4));


//Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’


function duplicaNumero(a){
    if (typeof a == 'number'){
        return a = a * 2;               
    }   else {
        console.log ('Debo ser ejecutada con un número');
    }       
}

console.log(duplicaNumero(1));














        