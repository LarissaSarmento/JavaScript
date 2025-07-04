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

/*
O Objeto de Eventos é o seguinte, é passado um parâmetro, 
e já é usado esse parametro e com o ponto acessa as propriedades direto do navegador como e.target

Já uma função normal eu passo a função com parametro e uso a função e o parametro é uma variável

*/