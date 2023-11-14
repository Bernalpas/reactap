
/* comentarios en js */
/* variables */
var nombre; //declaración de una variable
let apellido
let edad;
const DNI = 123456789; //declaración de una constante


nombre = 'Pepe';
apellido = "Perez";
edad = 25;
//DNI = 7987564533;

console.log(nombre, edad);


nombre = 30;
edad = 'Juan';

console.log(nombre, edad);

console.log("Mi nombre es: " + nombre);
console.log('Mi nombre es: ' + nombre);
console.log(`Mi nombre es ${nombre}`);

nombre++;

console.log(`Mi nombre es ${nombre}`);

nombre--;

console.log(`Mi nombre es ${nombre}`);


console.log('===================================================');
console.log('===================================================');

/* arreglos - arrays */
//               0         1          2        3           4
let frutas = ['peras', 'manzanas', 'uvas', 'bananas', 'naranjas'];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

let falso = false;
let verdadero = true;

//operadores matemáticos
// + - * / % **

//operadores relacionales
//< > <= >= == === != !==

//operaadores lógicos
// && || !

console.log('===================================================');
/* bucle for */
for(let i = 0; i < frutas.length; i++){
    console.log('Las frutas son: ' + frutas[i]);
}




