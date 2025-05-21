/*Quero que você crie um jogo simples do tipo adivinhe um número. Ele deve gerar um número aleatório de 1 a 100,
 depois desafiar o jogador a adivinhar o número em 10 rodadas. A cada rodada deve ser dito ao jogador se ele está certo ou errado, 
 se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto. Também deve ser mostrado ao jogador 
 os números que ele tentou adivinhar anteriormente. O jogo termina se o jogador acertar o número ou acabarem o número de tentativas.
  Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente. */



var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var campoPalpite = document.querySelector('.campoPalpite')
var envioPalpite = document.querySelector('.envioPalpite')

var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')

contagemPalpites = 1
var botaoReinicio
campoPalpite.focus()


function conferirPalpite(){
  var palpiteUsuario = Number(campoPalpite.value)
  if(contagemPalpites === 1){
    palpites.textContent = 'Palpites anteriores: '
  }
  palpites.textContent += palpiteUsuario + " "


if (palpiteUsuario === numeroAleatorio){
  ultimoResultado.textContent = 'Parabéns Acertou!'
  ultimoResultado.style.background = 'green'
  baixoOuAlto.textContent = ' '
  configFimDeJogo()
} else if(contagemPalpites === 10){
  ultimoResultado.textContent = 'Fim de Jogo'
  baixoOuAlto.textContent = ' '
  configFimDeJogo()
}else{
  ultimoResultado.textContent = 'Errado'
  ultimoResultado.style.background = 'red'
  if(palpiteUsuario < numeroAleatorio){
    baixoOuAlto.textContent = 'Seu palpite está muito baixo'
  } else if(palpiteUsuario > numeroAleatorio){
    baixoOuAlto.textContent = 'Seu palpite está muito alto'
  }
}
  contagemPalpites++
  campoPalpite.value = ''
  campoPalpite.focus()
}

envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo(){
  campoPalpite.desabled = true
  envioPalpite.desabled = true
  botaoReinicio = document.createElement('button')
  botaoReinicio.textContent = 'Iniciar novo jogo'
  document.body.appendChild(botaoReinicio)
  botaoReinicio.addEventListener('click', reiniciarJogo())
}


function reiniciarJogo(){
  contagemPalpites = 1 

  var reiniciarParas = document.querySelectorAll('.resultadoParas p')
  for(var i = 0; i < reiniciarParas.length; i++){
    reiniciarParas[i].textContent = ''
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio)

  campoPalpite.desabled = false
  envioPalpite.desabled = false
  campoPalpite.value = ''
  campoPalpite.focus()

  ultimoResultado.style.background = 'white'

  numeroAleatorio = Math.floor(Math.random() * 100) + 1

}
