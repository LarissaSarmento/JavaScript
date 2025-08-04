//Para visualizar eles individualmente só tirar comentário

// OBJETO 01 /////////////////////////

// const cat = {
//     name: "Bertie",
//     breed: "Cymric",
//     color: "white",
//     greeting: function () {
//       console.log("Meow!");
//     },
//   };
  
//   // Don't edit the code above here!
  
//   // Add your code here

//  let catName = cat['name']
//  cat.greeting()
//  cat.color = 'black'
  
//   // Don't edit the code below here!
  

//   const section = document.querySelector("section");
//   let para1 = document.createElement("p");
//   let para2 = document.createElement("p");
//   para1.textContent = `The cat's name is ${catName}.`;
//   para2.textContent = `The cat's color is ${cat.color}.`;
//   section.appendChild(para1);
//   section.appendChild(para2);
  
// OBJETO 02 /////////////////////////

const band = {
    name: 'Pink Floyd',
    nationality: 'Britânia',
    genre: 'Rock',
    mebers: 4,
    formed: 1965,
    split: 2014,
    albums: [
    {name: 'The Piper at the Gares of Down', released: 1967},    
    {name: 'The Wall', released: 1979}, 
    {name: 'Whis You Were Here', released: 1975},
    {name: 'The Dar Side od the Moon', relesead: 1973}
]}

let bandInfo;

// Don't edit the code above here!

// Add your code here
bandInfo = `A banda ${band.name}, nacionalidade ${band.nationality}, genero ${band.genre}, com ${band.mebers} membros, formada em ${band.formed},
encerrou em ${band.split}, primeiro albúm ${band.albums[0].name} no ano de ${band.albums[1].released}, teste para encontrar ${band.albums?.[1]?.name?? 'Album inexistente'}`

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);