// const a =12;

// function raiz(a) {
//     return Math.sqrt(a);
//   }
//   raiz(2);

  
//   console.log(raiz(a));
//   function saludar(nombre){
//     console.log("HOLA", nombre);
//   }
//   console.log(saludar("Juan Rojas"));


// let n1 = parseInt(prompt("Ingresa un numero:"));
// let n2 = parseInt(prompt("Ingresa otro numero:"));

// let operacion = parseInt(prompt("Selecciona:\n 1. Sumar \n 2. Multiplicar \n 3. Restar\n 4. Dividir"));


// switch(operacion){
//   case 1 : console.log("Sumar"); 
//           sum(n1,n2);
//   break;
//   case 2 : console.log("Multiplicar"); 
//   console.log(`${mul(n1,n2)}`);
//   break;
//   case 3 : console.log("Restar"); 
//   console.log(`${res(n1,n2)}`);
//   break;
//   case 4 : console.log("Dividir"); 
//   console.log(`${div(n1,n2)}`);
//   break;
//   default : alert("Nada seleccionado");
// }

// function sum(n1, n2){
//     return n1 + n2;
// }


// function mul(n1, n2){
//   return n1 * n2;
// }

// function res(n1, n2){
//   return n1 - n2;
// }

// function div(n1, n2){
//   return n1 / n2;
// }

// let modulo = (x,y) => x * y;
// console.log(modulo(3,4));


// function raiz(num){
//   return Math.sqrt(num);
// }

// console.log(raiz(39));

// let rai = (nume) => Math.sqrt(nume);
// console.log(rai(4));


// let estudiantes = ["Andres", "Felipe", "Carlos", "Carolina"];
// console.log(estudiantes);

// estudiantes.push("Erika")
// console.log(estudiantes);

// console.log(estudiantes.unshift("Carolina"));
// console.log(estudiantes);

// console.log(estudiantes.splice(2 , 0 , "Erika"));

// console.log(estudiantes.push("Anuel"));

// console.log(estudiantes);

// console.log(estudiantes.pop());

// estudiantes.forEach((i) => {
//   console.log(i);
//   estudiantes.pop(3);
//   console.log(estudiantes.pop());

// })

let estudiantes = ["Andres", "Felipe", "Carlos", "Carolina"];

estudiantes.forEach((est) => {
  if(est === estudiantes[4]) {
    console.log(est);
  }
});