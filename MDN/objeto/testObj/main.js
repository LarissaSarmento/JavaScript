//Para visualizar eles individualmente só tirar comentário

//OBJETO 01 /////////////////////////
/*
function infoGreeting (){
    console.log(`Hello, said ${this.name} the ${this.breed}. `)
}

const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: infoGreeting
  };
  
  // Don't edit the code above here!
  
  // Add your code here

  let cat2 = {
    name: 'Gato',
    breed: 'Raça',
    color: 'black',
    greeting: infoGreeting
  }

  let cat3 = {
    name:'Lia',
    breed:'Pura',
    color: 'Marrom',
    greeting: infoGreeting
  }

 let catName = cat['name']
 cat.greeting()
 cat2.greeting()
 cat3.greeting()
 cat.color = 'black'
  */
 
  // Don't edit the code below here!
  
////////// Toda essa parte de cima resumida aqui

class Cat {
 constructor(name, breed, color){
  this.name = name
  this.breed = breed
  this.color = color
 } 

 greeting(){
return (`Hello, said ${this.name} the ${this.breed}. `)
 }
}

 const cat = new Cat('Gato1', 'marca1', 'cor1')
 const cat2 = new Cat('Gato2', 'marca2', 'cor2')

//  console.log(cat2.greeting())

  const section = document.querySelector("section");
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");
  // para1.textContent = `The cat's name is ${cat.greeting()}`;
  // para2.textContent = `The cat's color is ${cat2.greeting()}`;
  section.appendChild(para1);
  section.appendChild(para2);


 class prod {
  constructor(nome, marca, preço){
    this.nome = nome
    this.marca = marca
    this.preço = preço  
 } 

 apresentarProd(){
  para1.innerHTML = `<h1>${this.nome}</h1><br>
  <h2>${this.marca}</h2><br>
  <h3>${this.preço}</h3>`
 }
}
  
const prod1 = new prod('Camisa Pink FLoyd', 'Over', '800.00')

console.log(prod1.apresentarProd())
// OBJETO 02 /////////////////////////

// const band = {
//     name: 'Pink Floyd',
//     nationality: 'Britânia',
//     genre: 'Rock',
//     mebers: 4,
//     formed: 1965,
//     split: 2014,
//     albums: [
//     {name: 'The Piper at the Gares of Down', released: 1967},    
//     {name: 'The Wall', released: 1979}, 
//     {name: 'Whis You Were Here', released: 1975},
//     {name: 'The Dar Side od the Moon', relesead: 1973}
// ]}

// let bandInfo;

// // Don't edit the code above here!

// // Add your code here
// bandInfo = `A banda ${band.name}, nacionalidade ${band.nationality}, genero ${band.genre}, com ${band.mebers} membros, formada em ${band.formed},
// encerrou em ${band.split}, primeiro albúm ${band.albums[0].name} no ano de ${band.albums[1].released}, teste para encontrar ${band.albums?.[1]?.name?? 'Album inexistente'}`

// // Don't edit the code below here!

// const section = document.querySelector("section");
// let para1 = document.createElement("p");
// para1.textContent = bandInfo;
// section.appendChild(para1);



// OBJETO 03 /////////////////////////

