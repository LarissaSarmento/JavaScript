let btn = document.querySelector('button')

function random(number){
  return Math.floor(Math.random() * (number + 1))
}

/* btn.addEventListener('click', () => {
  let rndCol = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) + ')'
  document.body.style.backgroundColor = rndCol
})
  */

// OBJETOS DE EVENTO

function bgChange(e) {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
