// if else

// let numero = 0;
// 
// if ( numero > 0 ) {
//   console.log( numero );
// } else {
//   console.log( "Es negativo o cero." );
// }


// Switch case
// let menu = "Celsius";
// let temp = 10;
// 
// switch(menu){
//   case 'Celsius': console.log("C a K \n C a F");
//     break;
//   case 'Kelvin' : console.log("K a C \n K a F");
//     break;
//   case 'Farenheit' : console.log("F a C \n F a K");
//     break;
//   default: console.log("Salir");
//    
//     
// }



let c ;
let k ;
let f ;

let temp = parseInt(prompt("Escribe la temperatura"));
let unit = parseInt(prompt("Elige la unidad"));

switch(unit) {
  case 'C' : c = unit;
    break;
  case 'F' : f = unit;
    break;
  case 'K' : k = unit;
  default: console.log("No valido");
}


console.log(k, "Kelvin a Celsius", c = k - 273.15);
console.log(k, "Kelvin a Farenheit", f = (k - 273.15) * 9 / 5 + 32);

console.log(k, "Farenheit a Celsius", (c = 5 * (f - 32) / 9));
console.log(k, "Farenheit a Kelvin", (k = 5 * (f - 32) / 9) + 273.15);

console.log(k, "Farenheit a Celsius", (k = c + 273.15));
console.log(k, "Farenheit a Kelvin", (f = (9 * c) / 5 + 32));



