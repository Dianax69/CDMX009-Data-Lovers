// alias for import
import { rickResultData } from './data.js';
//Data
const objectRMData = rickResultData();

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






/*
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
*/


// window.showSeasons = () => {
//   // eslint-disable-next-line no-console
//   console.log('data', Data);
//   document.getElementById('char-cointainer').style.display = 'block';
// };

// window.showSeasons = showSeasons;
