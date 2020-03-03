export const example = (mensaje) => {
  alert(mensaje);
}

/* const buttonChar = document.getElementById("button-char");
  buttonChar.addEventListener("click", function()){
    let requestRandomChar = new XMLHttpRequest ();
    requestRandomChar.open("GET", "../data/rickandmorty/rickandmorty.json");
    requestRandomChar.onload = function() {
      console.log(requestRandomChar.responseText)
      let dataRickMor = JSON.parse(requestRandomChar.responseText)
      console.log()
    }
  };
  requestRandomChar.send();
      */

  const getAlien = document.getElementById("");
    buttonChar.addEventListener("click", function()){
      let requestRandomChar = new XMLHttpRequest ();
      requestRandomChar.open("GET", "../data/rickandmorty/rickandmorty.json");
      requestRandomChar.onload = function() {
        console.log(requestRandomChar.responseText)
        let dataRickMor = JSON.parse(requestRandomChar.responseText)
        console.log()
      }
    };
    requestRandomChar.send();
