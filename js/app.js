// Comentario de una linea
/*
* Comentario multilinea
*/

// console.log("Hola Mundo");

// Variables
// let numero1 = 45;
// let numero2 = 11;
// let suma, resta, multiplicacion, mod;
// 
// 
// const pi = 3.14156;
// 
// let estado = true;
// 
// let numero3 = 78;
// 
// let direccion = "cra 140 7a 40";
// 
// let nulo = null;
// 
// numero3 = 125;
// 
// console.log(numero1); 
// console.log(numero2); 
// console.log(pi); 
// console.log(estado); 
// console.log(numero3);
// 
// suma = numero1 + numero2;
// resta = numero1 - numero2;
// multiplicacion = numero1 * numero2;
// 
// mod = numero1 % numero2;
// 
// 
// console.log(suma)



// Concatenar valores

  //  console.log('EL PRIMER VALOR ES: ' + numero1);
  //  console.log('EL SEGUNDO VALOR ES: ' + numero2);
  //  console.log('LA SUMA DE ' + numero1 + 'Y' + numero2 + ' ES: ' + suma );
  //  console.log('LA SUMA DE ' + numero1 + 'Y' + numero2 + ' ES: ' + suma );


// Literal Template
   // console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`); 
   // 
   // console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
//
   // console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`); 
//
//
   // console.log(typeof(estado));
   // console.log(typeof(nulo));
   // console.log(typeof(pi));
   // console.log(typeof(direccion));
//


// try{
//     let nu1 = parseInt(prompt("Ingrese el primer valor"));
//     let nu2 = parseInt(prompt("Ingrese el segundo12 valor"));
// } catch(err){
//     console.log("Saltarl el prompt en Output");
//     console.log(err);
// }


    // let nu1;
    // let nu2;
    // let s = nu1 + nu2;
// 
    // console.log(nu1, nu2);
    // console.log(`El primer valor ingresado es: ${nu1} y el segundo es: ${nu2}`);
    // console.log(s);
// 
    // let alea = (Math.random() * 5 ) + 1;
    // console.log(alea); //NaN
// 
    // let alea2 = Math.floor(Math.random() * 5 ) + 1;
    // console.log(alea2); // Entero
// 
    // let alea3 = Math.floor(Math.random() * 100 );
    // console.log(alea3); //  Entero a 100

// let edad = prompt("Cual es tu edad?");
// if ( edad >= 18 && edad  <= 40 ){
// 
//     console.log("Aprobado");
// } 
// else if (edad > 40) {
//     console.log("Muy viejo para esto");
// }
// else {
//     console.log("Rechazado");
// } 

// Loops if , else if, else


// let generacion = prompt("¿En que año naciste?");
// 
//     if (generacion >= 1883 && generacion <= 1900) { 
//     console.log("generacion perdida");
//     alert("generacion perdida");
//     }
//     else if (generacion >= 1901 && generacion <= 1924) {
//      console.log("generacion grandiosa");
//      alert("generacion grandiosa");
//     }
//      else if (generacion >= 1925 && generacion <= 1945) {
//      console.log("generacion silenciosa");
//      alert("generacion silenciosa");
//     }
//      else if (generacion >= 1946 && generacion <= 1964) {
//      console.log("baby boomers");
//     }
//      else if (generacion >= 1965 && generacion <= 1980) {
//      console.log("generacion x");
//     }
//      else if (generacion >= 1981 && generacion <= 1996) {
//      console.log("generacion y");
//     }
//      else if (generacion >= 1997 && generacion <= 2012) {
//      console.log("generacion z");
//     }
//     else if (generacion >= 2013 && generacion <= 2025)
//      { console.log("generacion alpha");
// 
//      } else console.log("no has nacido");

// Operador ternario
// let edad = 22;
// 
// let res = (edad>=1883 && edad<=1900)? "generacion perdida": "generacion perdida";
// 
// console.log(res);
// 

// let dia = 1;
// 
// 
// 
// switch (dia) {
// 
//      case 1: console.log("Lunes");
//      break;
//      case 2: console.log("Martes");
//      break;
//      default: console.log("No hay dia");            
// }
// 
// let operador = '+';
// 
// switch(operador){
//     case '+':
//         console.log("suma");
//     break;
//     case '-':
//         console.log("resta");
//     break;
//     case '/':
//     console.log("division");
//     break;
// 
//     default: console.log("No seleccionado");
// 
// }

// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = parseInt(prompt("Seleccione la cantidad"));
// 
// switch(cantidad){
//     case cantidad: console.log(cantidad, "COP", cantidad * dolar, "USD");
//     case cantidad : console.log(cantidad,  "COP", cantidad * euro, "EUR");
//     case 'GBP' :  console.log(cantidad,  "COP", cantidad * libraE, "GBP");
//     alert( `${cantidad} USD son: ${4280 * cantidad} COP \n ${cantidad} EUR ${4728 * cantidad} COP \n ${cantidad} GBP ${5601 * cantidad} COP`); 
//     break;
// }

// let USD = 4280;
// let EUR = 4728;
// let GBP = 5601;
// 
// let cantidad = prompt("Seleccione la cantidad");
// let Val = prompt("Escribe la divisa");
// 
// switch(Val)
// {
//     case 'USD' : alert(Val, "COP son:", Val * USD);
//     case 'EUR' : alert(`${Val} COP son: ${Val} * ${EUR}`);
//     case 'GBP' : alert(`${Val} COP son: ${Val} * ${GBP}`);
// }

// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log(cantidad, "dolares son", dolar *  cantidad, "pesos");
// console.log(cantidad, "euros son", euro  * cantidad, "pesos");
// console.log(cantidad,"libras esterlinas son", libraE  * cantidad, "pessos");


// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log(cantidad, "dolares son", dolar *  cantidad, "pesos");
// console.log(cantidad, "euros son", euro  * cantidad, "pesos");
// console.log(cantidad,"libras esterlinas son", libraE  * cantidad, "pessos");
// console.log( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 


// let dolar = 4280; 
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 
// alert( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 



// let cantidad = prompt("cantidad de dinero");
// alert( `${cantidad} USD son: ${4280 * cantidad} COP \n1 ${cantidad} EUR ${4728 * cantidad} COP \n2 ${cantidad} GBP ${5601 * cantidad} COP`); 



// FOR
// let tabla = 5;
// 
// for (let i = 1;  i <=10 ; i++) {
//     console.log(tabla, "*", i, "=",  tabla * i);
//     console.log("-------------------------");
//     console.log(`${tabla} * ${i} = ${tabla * i}`);
// }

// let tabla = 1;
// for (let i = 1; i <= 10; i++) { 
//             for (i = 1; i <= 1;) {
//                 tabla = tabla + 1;
//                 console.log(tabla, i);
//         
//         }
//  
// }
// for (let i = 0 ;  i < 100 ; i++) {
//     i = i + 1;
//     console.log(i);
// }
// let num = 1;
// while ( num <= 100) {
//     console.log(num);
//     num++;
// }

// var num;
// while ( num = parseInt(prompt("Escribe un numero inferior a 10:")) < 10 ) {
//  num = num + num;
//  console.log(num);
// }



// let opcion;

// let estado = true;

// let coseno, seno, raiz, numero;

// opciones realizar un calculo matematic

// 1. Raiz
// 2. Seno
// 3. Coseno

// while(estado){

// opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

// switch(opcion){

//   case 1: alert("Selecciono Raiz");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
//   raiz = Math.sqrt(numero);

//   alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

//   break;
//   case 2 : alert("Selecciono Seno N1");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));
//   seno = Math.sin(numero);

//   alert(`EL SENO DE ${numero} ES: ${seno}`);

//   break;

//   case 3 : alert("Selecciono Coseno N1");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));
//   coseno = Math.cos(numero);

//   alert(`EL SENO DE ${numero} ES: ${coseno}`);

//   break;

//   case 4: alert("SALIENDO....")
//   estado = falso;
//   break;
// default:
//     alert("LA OPCION NO EXISTE");

 
// }
// }

// const adivina = parseInt((Math.ceil(Math.random()) * 50)) ;
// console.log(adivina);
// let intentos;

// var numero = parseInt(prompt("Escribe un numero de 1 a 50"));

// while (numero != adivina) {
//     numero = parseInt(prompt("Adivina el numero"));
//     let intentos = intentos + 1;  

//     if (numero > adivina) {
//         alert("El numero es menor");

//     } else if (numero < adivina) {
//             alert("El numero es mayor");
//     }        else if (numero == adivina) {
               
//                 alert("Felicidades adivinaste el numero en ", intentos, "intentos");
//             }
// }
    
// var ball = " ";
// var numero = parseInt(prompt("Escribe un numero:"));
// for (var i = 0 ; i <= numero ; i++) {
//    ball += "*";
//    console.log(ball);
// }


// saludar("Pedro");

// function saludar(nombre){
//     alert(`Hola ${nombre}`);
// }


/*
let numero = 12;

function raiz(numero){
    return Math.sqrt(numero);
}

raiz(32);
console.log(raiz(12).toFixed(5));

const a = 12;
const b = 6;

function exponente(base, cuadrado){
    return Math.pow(base, cuadrado);
}

console.log(`El Area es: ${exponente(a,b)}`);
*/
/*
let a = 4;
let b = 5;

function suma(a, b){
    
}

console.log(a + b);
*/
// Funcion tradicional
/*
function multiplicacion(a,b){
    return a * b;
}

console.log(multiplicacion(8,5));
*/
// Funcion flecha (Arrow)
/*
let multplicacionUno = (a,b) => {
    return a * b;
}

console.log(multplicacionUno(2,5));
*/
// Multiplicacion forma 3
/*
let multiplicacionTres = (a,b) => a * b;
console.log(multiplicacionTres(4,8));

let s = 13; 

let raiz = (s) => Math.sqrt(s);
console.log(raiz(s));



let funcion = () => console.log("Funcion vacia");
funcion();
*/

/*
var numeros = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]
console.log(numeros.indexOf());

console.log(numeros);

console.log(numeros.push("Seis"));

console.log(numeros);

console.log(numeros.unshift("Cero"));

console.log(numeros);

console.log(numeros.splice(2, 0, 1.5));

console.log(numeros);

console.log(numeros.pop());

console.log(numeros);

console.log(numeros.shift());

console.log(numeros);

console.log(numeros.indexOf());

console.log(numeros);

console.log(numeros.indexOf(1.5));

numeros.forEach((num) => console.log(num));

numeros.forEach((num) => { console.log(num); console.log(num + " - " + num) } );

*/
/*
var numeros = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]
console.log(numeros.indexOf());

numeros.forEach((num) => console.log(num));

if (num == numeros[2]){
    console.log(num);
}
*/
// let vector = [];

// console.log(vector);

// vector[0] = "Uno";
// vector[1] = "Dos";
// vector[2] = "Tres";
// vector[3] = "Cuatro";

// console.log(vector);

// vector.forEach((num) => { console.log(num); });


// let vector = [];

// Loop para llenar

// for(let i = 0 ; i <= 5 ; i++ ){
 
// vector.push(i+1);
 
// }

// for(let i = 0; i <= 5 ; i++){
//     console.log(vector[i]);
// }

// let suma = 0;
// let numeros = [12, 23, 18, 16, 19];

// for(let i = 0 ; i < numeros.length; i++){
  
//   suma += numeros[i];
// }
// console.log(`"La suma es:", ${suma}`)


// for( let x = 0 ; x <= 10 ; x++ ){
//   console.log(x); 
// }


// let impar = 0;
// let num = [12, 23, 18, 16, 19];

// for(let i = 0 ; i < num.length; i++){
 
//   impar += num [i];

// if(num[i] % 2 == 0){
//   let par = num[i];
//   console.log(par);
// } else if ( num[i] % 2 != 0){
//   let impar = num[i];
// }
  
// }

// num.forEach((element) => console.log(element));



// let numeros = [12,23,18,16,19];

// for(let i = 0 ; i < numeros.length ; i++ ){
//   console.log(i);
// }

// numeros[i];

// if(numeros[i] % 2 == 0){
//     console.log("Par", numeros);
// }


// numeros.forEach((a) => console.log(a % 2));

// let num = new Array(5);

// for (let i = 0 i < num.length, i++ ){
//   num[i] = parseInt(prompt("Ingrese numero entero:"));
// } 

// for(let i = 0 ; i < num.length; i++){
//   console.log(`${num[i]}`);
// }



// function suma(a,b){
//     return (a + b);
// }

// console.log(suma(12, 3));

// bienvenida("Andres");

// function bienvenida(persona){
//     console.log("Hola", persona); 
// }


// function mult(a,b){
//     return a * b;
// }
// console.log(mult(3,7));

// let multi = ( c, d ) => {
//     return c * d;
// }
// console.log(multi(3, 5));

// let multip = ( e, f ) => e * f ;

// console.log( multip(4,5));

// let peso = 1;


// switch (peso) {

//     case 1 :  console.log(peso * 4210);
//     break;
//     case 2 :
//         break;
//     case 3 :
//     break;
//     default : console.log("Nada seleccionado");
// }

// Ejemplo: Menú de opciones para un juego de texto
// let opcion = prompt("Elige una opción:\n1. Jugar\n2. Instrucciones\n3. Salir");

// switch (opcion) {
//   case '1':
//     alert("¡Comienza el juego!");
//     // Aquí iría el código para iniciar el juego
//     break;
//   case '2':
//     alert("Instrucciones del juego:\n...");
//     // Aquí irían las instrucciones del juego
//     break;
//   case '3':
//     alert("¡Hasta luego!");
//     break;
//   default:
//     alert("Opción inválida.");
// }
// saludar("Pepe");
// function saludar(nombre){
//     console.log("Hola", nombre);
// }

// function raiz(numero) {
//     return Math.sqrt(numero);
// }

// console.log(raiz(12));

// console.log(Math.sqrt(12));

// function alrt(){
//     alert("Hola");
   
// }
//alrt();

// console.log(raiz(12));

// function raiz(numero) {
//     return Math.sqrt(numero);
// }


