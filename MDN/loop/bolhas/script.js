// for(let i = 0 < i < 100; i++){
//  ctx.beginPath()
//  ctx.fillStyle= "rgba(255,0,0,0.5)"
//  ctx.arc(ramdom(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI)
//  ctx.fill()
// }


var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
var info = "My cats are called ";
var para = document.querySelector("#p");

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info