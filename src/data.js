import data from './data/rickandmorty/rickandmorty.js';

export const example = () => {
  return 'example';
};

/* let charContainer = document.getElementById("char-cointainer");
const buttonChar = document.getElementById("button-char");

  buttonChar.addEventListener("click", function() {
    const requestRandomChar = new XMLHttpRequest();
    requestRandomChar.open("GET", "../data/rickandmorty/rickandmorty.json");
    requestRandomChar.onload = function() {
      let ourData = JSON.parse(requestRandomChar.responseText);
      renderHTML(ourData);
    };
    requestRandomChar.send();
};

function renderHTML(data) {
  let htmlString = "";
  for (i = 0; i < data.lenght; i++){
    htmlString += "<p>" + data[i].name + "is a" + data[i].specie + ".</p>";
  }
  charContainer.insertAdjacentHTML("beforeend", htmlString);
};

function requestRandomChar() {
  document.getElementById("button-char").value = document.getElementById("button-char").value;
}

  function showRandomChar () {
    document.getElementById('random-char').click();
  }
  console.log(showRandomChar, "hola")

  window.showRandomChar = showRandomChar;

  import data from './data/rickandmorty/rickandmorty.js';

let characters = {
*/
