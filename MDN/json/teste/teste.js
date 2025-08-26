const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL) // Aqui poderia buscar a URL direto, busca URL
  .then((response) => response.text()) //Quando a resposta chega converte em text, ou JSON
  .then((text) => displayCatInfo(text)); // Chama a função passando essa string como argumento

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let dados = JSON.parse(catString)  

  for(i=0; i < dados.length; i++){
    let mostrar = dados[i]
   let calculo = dados.length
   
  }




  // Add your code here

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;

}