// alias for import
import { rickResultData } from './data.js';
// declare const with a array values
const objectRMData = rickResultData();

<<<<<<< HEAD
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
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${value.image}`
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
//Fiter of GenderUnknow
const filterGenderUnknown = objectRMData.filter (item => {
return item.gender === "unknown";
})
//Button of filter of unknown
const buttonGenderUnknown = document.querySelector('#GenderUnknown')
buttonGenderUnknown.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterGenderUnknown){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of GenderFemale
const filterFemale = objectRMData.filter (item => {
return item.gender === "Female";
})
//Button of filter of Female
const buttonFemale = document.querySelector('#Female')
buttonFemale.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterFemale){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of GenderMale
const filterMale = objectRMData.filter (item => {
return item.gender === "Male";
})
//Button of filter of male
const buttonMale = document.querySelector('#Male')
buttonMale.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterMale){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of GenderNoGender
const filterNoGender = objectRMData.filter (item => {
return item.gender === "Genderless";
})
//Button of filter of NoGender
const buttonNoGender = document.querySelector('#NoGender')
buttonNoGender.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterNoGender){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

// FILTER FOR STATUS
//Fiter of EstatusAlive
const filterAlive = objectRMData.filter (item => {
return item.status === "Alive";
})
//Button of filter of Alive
const buttonAlive = document.querySelector('#Alive')
buttonAlive.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterAlive){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EstatusDead
const filterDead = objectRMData.filter (item => {
return item.status === "Dead";
})
//Button of filter of Dead
const buttonDead = document.querySelector('#Dead')
buttonDead.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterDead){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EstatusUnknown
const filterEstatusUnknown = objectRMData.filter (item => {
return item.status === "unknown";
})
//Button of filter of Unknown
const buttonEstatusUnknown = document.querySelector('#StatusUnknown')
buttonEstatusUnknown.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEstatusUnknown){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

// FILTER FOR ORIGIN
//Fiter of OriginAbadango
const filterAbadango = objectRMData.filter (item => {
return item.origin.name === "Abadango";
})
//Button of filter of Abadango
const buttonAbadango = document.querySelector('#Abadango')
buttonAbadango.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterAbadango){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of OriginAlphabetrium
const filterAlphabetrium = objectRMData.filter (item => {
return item.origin.name === "Alphabetrium";
})
//Button of filter of Alphabetrium
const buttonAlphabetrium = document.querySelector('#Alphabetrium')
buttonAlphabetrium.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterAlphabetrium){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of OriginBepis9
const filterBepis9 = objectRMData.filter (item => {
return item.origin.name === "Bepis 9";
})
//Button of filter of Bepis9
const buttonBepis9 = document.querySelector('#Bepis')
buttonBepis9.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterBepis9){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of OriginCableInterdimensional PENDIENTE
const filterCable = objectRMData.filter (item => {
return item.origin.name === "";
})
//Button of filter of Cable Interdimensional
const buttonCable = document.querySelector('#Cable')
buttonCable.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterCable){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of OriginUnknown
const filterOriginUnknown = objectRMData.filter (item => {
return item.origin.name === "unknown";
})
//Button of filter of OrigenUnknown
const buttonOriginUnknown = document.querySelector('#OriginUnknown')
buttonOriginUnknown.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterOriginUnknown){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of Gazorpazorp
const filterGazorpazorp = objectRMData.filter (item => {
return item.origin.name === "Gazorpazorp";
})
//Button of filter of Garzorpazorp
const buttonGazorpazorp = document.querySelector('#Gazorpazorp')
buttonGazorpazorp.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterGazorpazorp){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of Nuptia
const filterNuptia = objectRMData.filter (item => {
return item.origin.name === "Nuptia 4";
})
//Button of filter of Nuptia
const buttonNuptia = document.querySelector('#Nuptia')
buttonNuptia.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterNuptia){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of FantasyWorld
const filterFantasyWorld = objectRMData.filter (item => {
return item.origin.name === "Fantasy World";
})
//Button of filter of FantasyWorld
const buttonFantasyWorld = document.querySelector('#FantasyWorld')
buttonFantasyWorld.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterFantasyWorld){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of PurgePlanet
const filterPurgePlanet = objectRMData.filter (item => {
return item.origin.name === "Purge Planet";
})
//Button of filter of PurgePlanet
const buttonPurgePlanet = document.querySelector('#PurgePlanet')
buttonPurgePlanet.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterPurgePlanet){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of Earth5-126
const filterEarth126 = objectRMData.filter (item => {
return item.origin.name === "Earth (5-126)";
})
//Button of filter of Earth5-126
const buttonEarth126 = document.querySelector('#Earth5-126')
buttonEarth126.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEarth126){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of Earth (C-500A)
const filterEarthC500A = objectRMData.filter (item => {
return item.origin.name === "Earth (C-500A)";
})
//Button of filter of Earth (C-500A)
const buttonEarthC500A = document.querySelector('#EarthC-500A')
buttonEarthC500A.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEarthC500A){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EarthC-137
const filterEarthC137 = objectRMData.filter (item => {
return item.origin.name === "Earth (C-137)";
})
//Button of filter of EarthC137
const buttonEarthC137 = document.querySelector('#EarthC-137')
buttonEarthC137.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEarthC137){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})

//Fiter of EarthReplacement
const filterEarthReplacement = objectRMData.filter (item => {
return item.origin.name === "Earth (Replacement Dimension)";
})
//Button of filter of EarthReplacement
const buttonEarthReplacement = document.querySelector('#EarthReplacement')
buttonEarthReplacement.addEventListener('click',() =>{
  const result = document.getElementById("wrapper")
  for(const item of filterEarthReplacement){
    const listItem = document.createElement('p')
    listItem.textContent =`${item.name} ${item.status} ${item.species} ${item.type} ${item.gender}`
    result.appendChild(listItem)
  }
})
/*
LIST ORIGIN
Earth (C-137)
Earth (Replacement Dimension)
unknown
Signus 5 Expanse
Post-Apocalyptic Earth
Purge Planet
Venzenulon 7
Earth (C-500A)
Earth (Evil Ricks Target Dimension)
Nuptia 4
Fantasy World
Bird World
Gromflom Prime
Ricks Battery Microverse
The Menagerie
Earth (K-83)
Hideout Planet
Cronenberg Earth
Giants Town
Unitys Planet
Earth (C-500A)
Earth (Unknown dimension)
Anatomy Park
Earth (J19ζ7)
Eric Stoltz Mask Earth
Gazorpazorp
Resort Planet
Hamster in Butt World
Earth (Giant Telepathic Spiders Dimension)
*/
=======
>>>>>>> fd3902f0951a30c98bcd640250014ff2cc053656
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

/* funciton generate a card
  use slice to resize array and show only 12 positions
  Params: Original object
*/
makeCard(objectRMData.slice(0, 12));
// Filter for Species
/*
  function to generate a filter object with params
  Prams: (Original object, key to filter, value to match with key)
*/
const objectFiltered = (obj, key, value) => obj.filter((item) => item[key] === value);

// detect any click from group ul (li)
document.querySelector('#buttonGroupSpecies').addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'alien': {
      const filterObject = objectFiltered(objectRMData, 'species', 'Alien');
      makeCard(filterObject);
      break;
    }
    case 'animal': {
      makeCard(objectFiltered(objectRMData, 'species', 'Animal'));
      break;
    }
    case 'cronenberg': {
      makeCard(objectFiltered(objectRMData, 'species', 'Cronenberg'));
      break;
    }
    case 'speciesUnknown': {
      makeCard(objectFiltered(objectRMData, 'species', 'unknown'));
      break;
    }
    case 'disease': {
      makeCard(objectFiltered(objectRMData, 'species', 'Disease'));
      break;
    }
    case 'human': {
      makeCard(objectFiltered(objectRMData, 'species', 'Human'));
      break;
    }
    case 'humanoid': {
      makeCard(objectFiltered(objectRMData, 'species', 'Humanoid'));
      break;
    }
    case 'mythological': {
      makeCard(objectFiltered(objectRMData, 'species', 'Mythological'));
      break;
    }
    case 'parasite': {
      makeCard(objectFiltered(objectRMData, 'species', 'Parasite'));
      break;
    }
    case 'robot': {
      makeCard(objectFiltered(objectRMData, 'species', 'Robot'));
      break;
    }
    case 'vampire': {
      makeCard(objectFiltered(objectRMData, 'species', 'Vampire'));
      break;
    }
    default: {
      break;
    }
  }
});
// Filter for Status
const filterAlive = objectRMData.filter((item) => item.status === 'Alive');
// Button of filter of Alive
const buttonAlive = document.querySelector('#alive');
buttonAlive.addEventListener('click', () => {
  makeCard(filterAlive);
});
// Fiter of statusDead
const filterDead = objectRMData.filter((item) => item.status === 'Dead');
// Button of filter of Dead
const buttonDead = document.querySelector('#dead');
buttonDead.addEventListener('click', () => {
  makeCard(filterDead);
});
// Filter of statusUnknown
const filterEstatusUnknown = objectRMData.filter((item) => item.status === 'unknown');
// Button of filter of Unknown
const buttonEstatusUnknown = document.querySelector('#statusUnknown');
buttonEstatusUnknown.addEventListener('click', () => {
  makeCard(filterEstatusUnknown);
});
