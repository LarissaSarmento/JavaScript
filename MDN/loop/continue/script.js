var para = document.querySelector("p");
var input = document.querySelector("input");
var btn = document.querySelector("button");

let num = input.value
for(let i = 1; i <= num; i++){
  let raizQuadrada = Math.sqrt(i)
  if(Math.floor(raizQuadrada) !== raizQuadrada){
    continue
  }
  para.textContent += i + " "
}