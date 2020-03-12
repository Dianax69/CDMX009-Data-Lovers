// alias for import
import { rickResultData } from './data.js';
// declare const with a array values
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
// card from HTML
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
        <span>Especie:</span>
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
/* function generates a card
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
// Filter for Gender
document.querySelector('#buttonGroupGender').addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'genderUnknown': {
      const filterObject = objectFiltered(objectRMData, 'gender', 'unknown');
      makeCard(filterObject);
      break;
    }
    case 'female': {
      makeCard(objectFiltered(objectRMData, 'gender', 'Female'));
      break;
    }
    case 'male': {
      makeCard(objectFiltered(objectRMData, 'gender', 'Male'));
      break;
    }
    case 'noGender': {
      makeCard(objectFiltered(objectRMData, 'gender', 'Genderless'));
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
const filterDead = objectRMData.filter((item) => item.status === 'Dead');
const buttonDead = document.querySelector('#dead');
buttonDead.addEventListener('click', () => {
  makeCard(filterDead);
});
const filterEstatusUnknown = objectRMData.filter((item) => item.status === 'unknown');
const buttonEstatusUnknown = document.querySelector('#statusUnknown');
buttonEstatusUnknown.addEventListener('click', () => {
  makeCard(filterEstatusUnknown);
});
// Filter for Origin
const filterOriginAnatomy = objectRMData.filter((item) => item.origin.name === 'Anatomy Park');
const buttonOriginAnatomy = document.querySelector('#anatomy-park');
buttonOriginAnatomy.addEventListener('click', () => {
  makeCard(filterOriginAnatomy);
});
const filterOriginUnknown = objectRMData.filter((item) => item.origin.name === 'unknown');
const buttonOriginUnknown = document.querySelector('#origin-unknown');
buttonOriginUnknown.addEventListener('click', () => {
  makeCard(filterOriginUnknown);
});
const filterOriginNuptia = objectRMData.filter((item) => item.origin.name === 'Nuptia 4');
const buttonOriginNuptia = document.querySelector('#nuptia');
buttonOriginNuptia.addEventListener('click', () => {
  makeCard(filterOriginNuptia);
});
const filterOriginPluto = objectRMData.filter((item) => item.origin.name === 'Pluto');
const buttonOriginPluto = document.querySelector('#pluto');
buttonOriginPluto.addEventListener('click', () => {
  makeCard(filterOriginPluto);
});
const filterOriginPurge = objectRMData.filter((item) => item.origin.name === 'Purge Planet');
const buttonOriginPurge = document.querySelector('#purge-planet');
buttonOriginPurge.addEventListener('click', () => {
  makeCard(filterOriginPurge);
});
const filterOriginEarthC = objectRMData.filter((item) => item.origin.name === 'Earth (C-500A)');
const buttonOriginEarthC = document.querySelector('#earth-c');
buttonOriginEarthC.addEventListener('click', () => {
  makeCard(filterOriginEarthC);
});
const filterOriginEarthOn = objectRMData.filter((item) => item.origin.name === 'Earth (C-137)');
const buttonOriginEarthOn = document.querySelector('#earthone-three');
buttonOriginEarthOn.addEventListener('click', () => {
  makeCard(filterOriginEarthOn);
});
const filterOriginEarthRe = objectRMData.filter((item) => item.origin.name === 'Earth (Replacement Dimension)');
const buttonOriginEarthRe = document.querySelector('#earth-replacement');
buttonOriginEarthRe.addEventListener('click', () => {
  makeCard(filterOriginEarthRe);
});
const filterOriginPostE = objectRMData.filter((item) => item.origin.name === 'Post-Apocalyptic Earth');
const buttonOriginPostE = document.querySelector('#post-apocalypt');
buttonOriginPostE.addEventListener('click', () => {
  makeCard(filterOriginPostE);
});

const hola = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(key);
    console.log(value.episode);
  });
};

// Filter for seasons
// const arrayEpisodes  = objectRMData.filter(item) => {
//   return item[key] === 10;
// };
// objectRMData.arrayEpisodes === 10
hola(objectRMData);
