// alias for import
import { rickResultData } from './data.js';
//Data
const objectRMData = rickResultData();
/*
//FILTER OF ESPECIE
//Fiter of EspecieAlien 1
const filterAlien = objectRMData.filter (item => {
return item.species === "Alien";
})
//Button of filter of Alien
const buttonAlien = document.querySelector('#Alien')
buttonAlien.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterAlien){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieAnimal 2
const filterAnimal = objectRMData.filter (item => {
return item.species === "Animal";
})
//Button of filter of Animal
const buttonAnimal = document.querySelector('#Animal')
buttonAnimal.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterAnimal){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieCronenberg 3
const filterCronenberg = objectRMData.filter (item => {
return item.species === "Cronenberg";
})
//Button of filter of Cronenberg
const buttonCronenberg = document.querySelector('#Cronenberg')
buttonCronenberg.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterCronenberg){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieUnknown 4
const filterEspecieUnknown = objectRMData.filter (item => {
return item.species === "unknown";
})
//Button of filter of unknown
const buttonEspecieUnknown = document.querySelector('#SpeciesUnknown')
buttonEspecieUnknown.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEspecieUnknown){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieDisease 5
const filterDisease = objectRMData.filter (item => {
return item.species === "Disease";
})
//Button of filter of Disease
const buttonDisease = document.querySelector('#Disease')
buttonDisease.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterDisease){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieHuman 6
const filterHuman = objectRMData.filter (item => {
return item.species === "Human";
})
//Button of filter of Human
const buttonHuman = document.querySelector('#Human')
buttonHuman.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterHuman){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieHumanoid 7
const filterHumanoid = objectRMData.filter (item => {
return item.species === "Humanoid";
})
//Button of filter of Humanoid
const buttonHumanoid = document.querySelector('#Humanoid')
buttonHumanoid.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterHumanoid){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieMythological 8
const filterMythological = objectRMData.filter (item => {
return item.species === "Mytholog";
})
//Button of filter of Mythological
const buttonMythological = document.querySelector('#Mythological')
buttonMythological.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterMythological){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieParasite 9
const filterParasite = objectRMData.filter (item => {
return item.species === "Parasite";
})
//Button of filter of Parasite
const buttonParasite = document.querySelector('#Parasite')
buttonParasite.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterParasite){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieRobot 10
const filterRobot = objectRMData.filter (item => {
return item.species === "Robot";
})
//Button of filter of Robot
const buttonRobot = document.querySelector('#Robot')
buttonRobot.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterRobot){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EspecieVampire 11
const filterVampire = objectRMData.filter (item => {
return item.species === "Vampire";
})
//Button of filter of Vampire
const buttonVampire = document.querySelector('#Vampire')
buttonVampire.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterVampire){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

// FILTER FOR GENER
//Fiter of EspecieGender
const filterGenderUnknown = objectRMData.filter (item => {
return item.gender === "unknown";
})
//Button of filter of Vampire
const buttonGenderUnknown = document.querySelector('#GenderUnknown')
buttonGenderUnknown.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterGenderUnknown){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})
*/



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
const dataSlice = objectRMData.slice(0, 12);
const container = document.getElementById('container-cards');
const makeCard = () => {
  Object.entries(dataSlice).forEach(([key, value]) => {
    const card = `
    <div class="cards_char" id="${key}">
      <div class="img-container">
          <img src="${value.image}" alt="character image">
      </div>
      <div class="properties-container">
        <div class="properties_characters">
          <span>Número de ID:</span>
          <p>${value.id}</p>
        </div>
        <div class="properties_characters">
          <span>Nombre:</span>
          <p>${value.name}</p>
        </div>
        <div class="properties_characters">
          <span>Estado:</span>
          <p>${value.status}</p>
        </div>
        <div class="properties_characters">
          <span>Género:</span>
          <p>${value.gender}</p>
        </div>
        <div class="properties_characters">
          <span>Origen:</span>
          <p>${value.origin.name}</p>
        </div>
        <div class="properties_characters">
          <span>Locación:</span>
          <p>${value.location.name}</p>
        </div>
      </div>
      `;
    container.innerHTML += card;
  });
};
makeCard();

document.getElementById('seasons-button').addEventListener('click', () => {
  container.innerHTML = '';
  document.getElementById('seasons').style.display = 'block';
});
*/


// window.showSeasons = () => {
//   // eslint-disable-next-line no-console
//   console.log('data', Data);
//   document.getElementById('char-cointainer').style.display = 'block';
// };

// window.showSeasons = showSeasons;
