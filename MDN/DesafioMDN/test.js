
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var envioPalpite = document.querySelector(".envioPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite() {
  alert("Eu sou um placeholder");
}

conferirPalpite();

var nome = "Bingo";
nome;
var ola = " diz olá!";
ola;
var cumprimento = nome + ola;
cumprimento;

nome += " diz olá!";

nome = nome + " diz olá!";

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }
  palpites.textContent += palpiteUsuario + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você acertou!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito baixo!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito alto!";
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}

contagemPalpites === 1;

envioPalpite.addEventListener("click", conferirPalpite);

function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll(".resultadoParas p");
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = "";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

for (var i = 1; i < 21; i++) {
  console.log(i);
}

var reiniciarParas = document.querySelectorAll(".resultadoParas p");
for (var i = 0; i < reiniciarParas.length; i++) {
  reiniciarParas[i].textContent = "";
}

campoPalpite.focus();

var campoPalpite = document.querySelector(".campoPalpite");

campoPalpite.focus();

campoPalpite.value = "Olá";

palpites.value;

palpites.textContent = "Onde está meu parágrafo?";

palpites.style.backgroundColor = "yellow";
palpites.style.fontSize = "200%";
palpites.style.padding = "10px";
palpites.style.boxShadow = "3px 3px 6px black";
