// alias for import
import { rickResultData } from './data.js';

// function for slider
let slider = document.querySelector('.container-slider')
let sliderIndividual = document.querySelectorAll('.slider-container')
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2500;

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
 

const objectRMData = rickResultData();
for (const index in objectRMData) {
  const imgCharacter = objectRMData[index].image;
  div.innerHTML = html;
}

document.getElementById('seasons-button').addEventListener('click', () => {
  document.getElementById('seasons').style.display = 'block';
});
