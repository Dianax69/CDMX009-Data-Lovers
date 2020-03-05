//importar funciones del data
import data from './data/rickandmorty/rickandmorty.js';

//crear function que muestre los datos
let verdata = data;
function traer() {
    fetch('data')

}

// console.log(data.info.pages);

//referencia
//let getData = document.querySelector('#get')
//observador
//getData.addEventListener('click', mostrar)








//Funciones para el slider
let slider = document.querySelector('.container-slider')
let sliderIndividual = document.querySelectorAll('.slider-container')
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function() {
  width = sliderIndividual[0].clientWidth;
})
setInterval(function(){
  slides();
},intervalo);

function slides(){
  slider.style.transform = "translate("+(-width*contador)+"px)";
  slider.style.transition = "transform .8s";
  contador++;

  if (contador == sliderIndividual.length){
    setTimeout(function() {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador=1;
    },1500)
  }
};
// function showRandomChar () {
//   document.getElementById("random-char").style.display = "none";
// };

// window.showRandomChar = showRandomChar;
