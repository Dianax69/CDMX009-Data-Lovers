// alias for import
import { rickResultData } from './data.js';
// Data
const objectRMData = rickResultData();

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

// Function to show only 12 characters on main page using method slice
const container = document.getElementById('container-cards');
const makeCard = (object) => {
  container.innerHTML = '';
  // Method forEach to show info for every character into a card
  Object.entries(object).forEach(([key, value]) => {
    const card = `
    <div class="cards_char" id="${key}">
      <div class="img-container">
          <img src="${value.image}" alt="character image">
      </div>
      <div class="properties-container">
        <div class="properties_characters">
          <span>ID:</span>
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
        <span>Estado:</span>
        <p>${value.species}</p>
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

makeCard(objectRMData.slice(0, 12));

// FILTER FOR ESPECIE
// Filter of specieAlien
const filterAlien = objectRMData.filter((item) => item.species === 'Alien');
// Button of filter of Alien
const buttonAlien = document.querySelector('#alien');
buttonAlien.addEventListener('click', () => {
  makeCard(filterAlien);
});
const filterAnimal = objectRMData.filter((item) => item.species === 'Animal');
const buttonAnimal = document.querySelector('#animal');
buttonAnimal.addEventListener('click', () => {
  makeCard(filterAnimal);
});
// Filter of specieCronenberg
const filterCronenberg = objectRMData.filter((item) => item.species === 'Cronenberg');
// Button of filter of Cronenberg
const buttonCronenberg = document.querySelector('#cronenberg');
buttonCronenberg.addEventListener('click', () => {
  makeCard(filterCronenberg);
});
// Filter of specieUnknown
const filterSpecieUnknown = objectRMData.filter((item) => item.species === 'speciesUnknown');
// Button of filter of unknown
const buttonSpecieUnknown = document.querySelector('#speciesUnknown');
buttonSpecieUnknown.addEventListener('click', () => {
  makeCard(filterSpecieUnknown);
});
// Filter of specieDisease
const filterDisease = objectRMData.filter((item) => item.species === 'Disease');
// Button of filter of Disease
const buttonDisease = document.querySelector('#disease');
buttonDisease.addEventListener('click', () => {
  makeCard(filterDisease);
});
// Filter of specieHuman
const filterHuman = objectRMData.filter((item) => item.species === 'Human');
// Button of filter of Human
const buttonHuman = document.querySelector('#human');
buttonHuman.addEventListener('click', () => {
  makeCard(filterHuman);
});
// Filter of EspecieHumanoid 7
const filterHumanoid = objectRMData.filter((item) => item.species === 'Humanoid');
// Button to filter Humanoid
const buttonHumanoid = document.querySelector('#humanoid');
buttonHumanoid.addEventListener('click', () => {
  makeCard(filterHumanoid);
});
// Filter of EspecieMythological 8
const filterMythological = objectRMData.filter((item) => item.species === 'Mythological');
// Button to filter Mythological
const buttonMythological = document.querySelector('#mythological');
buttonMythological.addEventListener('click', () => {
  makeCard(filterMythological);
});
// Filter of EspecieParasite 9
const filterParasite = objectRMData.filter((item) => item.species === 'Parasite');
// Button of filter of Parasite
const buttonParasite = document.querySelector('#parasite');
buttonParasite.addEventListener('click', () => {
  makeCard(filterParasite);
});
// Filter of specieRobot 10
const filterRobot = objectRMData.filter((item) => item.species === 'Robot');
// Button of filter of Robot
const buttonRobot = document.querySelector('#robot');
buttonRobot.addEventListener('click', () => {
  makeCard(filterRobot);
});
// Filter of EspecieVampire 11
const filterVampire = objectRMData.filter((item) => item.species === 'Vampire');
// Button of filter of Vampire
const buttonVampire = document.querySelector('#vampire');
buttonVampire.addEventListener('click', () => {
  makeCard(filterVampire);
});
// FILTER FOR GENDER
// Fiter of specieGender
const filterGenderUnknown = objectRMData.filter((item) => item.species === 'GenderUnknown');
// Button of filter of Vampire
const buttonGenderUnknown = document.querySelector('#genderUnknown');
buttonGenderUnknown.addEventListener('click', () => {
  makeCard(filterGenderUnknown);
});
