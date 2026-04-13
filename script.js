// Listas de imágenes
const listaCabezas = [
  "assets/img/cabeza1.jpg",
  "assets/img/cabeza2.jpg",
  "assets/img/cabeza3.jpg",
];
const listaTroncos = [
 "assets/img/torso1.jpg",
  "assets/img/torso2.jpg",
  "assets/img/torso3.jpg",
];
const listaPatas = [
  "assets/img/pies1.jpg",
  "assets/img/pies2.jpg",
  "assets/img/pies3.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const torso = document.getElementById("torso");
const pies = document.getElementById("pies");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let torsoAleatorio = 0;
let piesAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  torsoAleatorio = numeroAleatorio(0, listaTroncos.length);
  piesAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  torso.src = `${listaTroncos[torsoAleatorio]}`;
  pies.src = `${listaPatas[piesAleatorio]}`;

  console.log(cabezaAleatorio, torsoAleatorio, piesAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();

document.addEventListener("DOMContentLoaded", function () {
  generarBestia();
  boton.addEventListener("click", generarBestia);
});
console.log(cabeza, torso, pies, boton);