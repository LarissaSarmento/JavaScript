const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL) // Aqui poderia buscar a URL direto, busca URL
  .then((response) => response.json()) //Quando a resposta chega converte em text, ou JSON
  .then((text) => displayCatInfo(text)); // Chama a função passando essa string como argumento

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  for(let i=0; i < catString.length; i++){
    let lista = document.createElement('ul')
   motherInfo += catString[i].name + ' ' 

   filhos = catString[i].kittens

   for(let f=0; f < filhos.length; f++){
    kittenInfo += filhos[f].gender + ' '
   }
  }


  
  // Add your code here

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;

}