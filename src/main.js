// alias for import
import { rickResultData } from './data.js';

// function for slider
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

const objectRMData = rickResultData();
for (const index in objectRMData) {
  const imgCharacter = objectRMData[index].image;
  const idCharacter = objectRMData[index].id;
  const nameCharacter = objectRMData[index].name;
  const statusCharacter = objectRMData[index].status;
  const genderCharacter = objectRMData[index].gender;
  const originCharacter = objectRMData[index].origin.name;
  const htmlCardContainerImage = `${imgCharacter,''}`;
  const htmlCardContainerId = `${idCharacter}`;
  const htmlCardContainerName = `${nameCharacter}`;
  const htmlCardContainerStatus = `${statusCharacter}`;
  const htmlCardContainerGender = `${genderCharacter}`;
  const htmlCardContainerOrigin = `${originCharacter}`;
  var html = "<p>Hello, <b>World</b>";
var div = document.createElement("div");
div.innerHTML = html;
  document.getElementById('id-character').append(htmlCardContainerImage);
  document.getElementById('id-character').append(htmlCardContainerId);
  document.getElementById('id-character').append(htmlCardContainerName);
  document.getElementById('id-character').append(htmlCardContainerStatus);
  document.getElementById('id-character').append(htmlCardContainerGender);
  document.getElementById('id-character').append(htmlCardContainerOrigin);
  document.createElement("li")
}

document.getElementById('seasons-button').addEventListener('click', () => {
  document.getElementById('seasons').style.display = 'block';
});

// window.showSeasons = () => {
//   // eslint-disable-next-line no-console
//   console.log('data', Data);
//   document.getElementById('char-cointainer').style.display = 'block';
// };

// window.showSeasons = showSeasons;
