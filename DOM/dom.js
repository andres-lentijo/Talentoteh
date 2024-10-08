// let elemento = document;

// elemento = document.head;

// console.log(elemento);


// let elementoW;
// elementoW = document.window;

// console.log(`ELEMENTOS DE WINDOWS ${elementoW}`)

// let elementoE = document.styleSheets;

// console.log(elementoE);

// let elementoId = document.getElementById('tituloDOM').innerHTML = "Nuevo Título";
// console.log(elementoId);

// let opId = document.getElementById("p1");
// opId.innerHTML = 'JavaScript';

// let opId2 = document.getElementById("p2");
// opId2.innerHTML = 'Kotlin';

// let opId3 = document.getElementById("p3");
// opId3.innerHTML = 'C#';



// document.getElementsByClassName("lista").innerHTML = ("Pop");


// document.getElementsByClassName("prueba").innerHTML = "Hola test";


// const elementos = document.getElementsByClassName('lista');
// elementos[0].innerHTML = 'Uno';
// elementos[1].innerHTML = 'Dos';
// elementos[2].innerHTML = 'Tres';




// let elementosClase = document.getElementsByClassName('listas');
//     console.log(elementosClase);


// Tagmane
// let elementoTag = document.getElementsByTagName('p');
// console.log(elementoTag);

// let selectorQuery = document.querySelector('p');

// console.log(selectorQuery);
// console.log(selectorQuery.childElementCount);

// console.log(selectorQuery.children);
// console.log(selectorQuery.children[0]);

// document.querySelector('.test').innerHTML = "TOT";



// for(let i = 0 ; i <= selectorQuery.lenght ; i++ ){
//     console.log(selectorQuery[i].textContent);
// }


// let elementosP = document.getElementsByTagName('p');
//     console.log(elementosP.length);

    // for(let i = 0 ; i <= elementosP.length ; i++){
    //     console.log(elementosP[i].textContent)
    // }

    // elementosP[2].innerHTML = 'Ayudaaaa';


    // let estilo = document.getElementById('p1');
    // estilo.style.color = 'red';

    // let liS = document.getElementsByClassName("listas");

    // for(let i = 0 ; i <= listas.length ; i++){
    //     console.log(liS);
    // }




   
// function verFecha(){
//     let fech = document.getElementById("resultado");
//     fech.innerHTML = Date();
//     fech.style.color = "red";
// }


// function verHora(){
//     let fech = document.getElementById("resultado");
//     fech.innerHTML = setTimeout(3);
//     fech.style.color = "red";
// }

function temperatura(){
    let numero = parseFloat(document.getElementById('dato1').value);
    let calculo = numero - 273.5;
    alert(`La conversion es : ${calculo}`);
    let res = document.getElementById("res");
    res.innerHTML = (`Resultado : ${calculo}`);
}

