
const listaCabezas = ["assets/img/cabeza1.jpg", "assets/img/cabeza2.jpg", "assets/img/cabeza3.jpg"];
const listaTroncos = ["assets/img/torso1.jpg", "assets/img/torso2.jpg", "assets/img/torso3.jpg"];
const listaPatas = ["assets/img/pies1.jpg", "assets/img/pies2.jpg", "assets/img/pies3.jpg"];
const listaPaisajes = ["assets/img/rio.jpg", "assets/img/rioenoil.jpg", "assets/img/papelperiodico.jpg","assets/img/Eyes.jpg"];


const cabeza = document.getElementById("cabeza");
const torso = document.getElementById("torso");
const pies = document.getElementById("pies");
const capaFondo = document.getElementById("capaFondo");
const boton = document.getElementById("boton");
const saludo = document.getElementById("saludo");


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function generarTodo() {

    cabeza.src = listaCabezas[numeroAleatorio(0, listaCabezas.length)];
    torso.src = listaTroncos[numeroAleatorio(0, listaTroncos.length)];
    pies.src = listaPatas[numeroAleatorio(0, listaPatas.length)];


    const nuevoFondo = listaPaisajes[numeroAleatorio(0, listaPaisajes.length)];
    capaFondo.src = nuevoFondo;

    console.log("¡Mezcla total realizada!");
}


boton.addEventListener("click", generarTodo);

let nombre = prompt("¿Como te llamas?");
if (nombre) {
    saludo.innerText = `holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, ${nombre}`;
}
generarTodo();