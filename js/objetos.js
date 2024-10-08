
// OBJETOS
console.log("OBJETOS");

let carro = {
    marca : "toyota",
    precio : 30,
    color : "rojo",
    acelera(){
        console.log("Esta acelerando");
    }, 
     frenar(){
        console.log("El carro esta frenando");
     }
}

// SETTER
console.log("SETTER");
carro.motor = "1600";
console.log(carro);
console.log(carro.acelera());
console.log(carro.frenar());

// OOP Clases
class persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

        set nombre(nombre){
            this._nombre = this.nombre
        }


    saludar(){
        console.log(`Hola ${nombre} tienes ${32} años`);
    }
}

const p1 = new persona("Andres", 23);
const p2 = new persona("Renata", 12);
 
console.log(p1, p2);


// UML CLASE > ATRIBUTO > METODO



