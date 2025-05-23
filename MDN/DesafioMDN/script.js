var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')

var envioPalpite = document.querySelector('.envioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')

var contagemPalpites = 1
var botaoReinicio
campoPalpite.focus()

function conferirPalpite(){
   var palpiteUsuario = Number(campoPalpite.value)
   if (contagemPalpites === 1){
    palpites.textContent = 'Palpites anteriores: '
}

    palpites.textContent += palpiteUsuario + " " // Aqui vai apresentar o texto + o que o usuário digitou e as " " são para dar espaço uma da outra

    if (palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = "Parabéns! Você acertou!"
        ultimoResultado.style.backgroundColor = "green"
        baixoOuAlto.textContent = " "
        configFimDeJogo()
    }else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO!"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    }else {
        ultimoResultado.textContent = 'Errado'
        ultimoResultado.style.backgroundColor = 'red'
        if (palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito baixo'
        } else if (palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto'
        }
    }
        contagemPalpites++
        campoPalpite.value = ''
        campoPalpite.focus()

    }

    envioPalpite.addEventListener("click", conferirPalpite)

    function configFimDeJogo(){
        campoPalpite.desabled = true
        envioPalpite.desabled = true
        botaoReinicio = document.createElement('button')
        botaoReinicio.textContent = 'Iniciar novo jogo'
        document.body.appendChild(botaoReinicio)
        botaoReinicio.addEventListener('click', reiniciarJogo)
    }

    function reiniciarJogo(){
        contagemPalpites = 1 

        var reiniciarParas = document.querySelectorAll('.resultadoParas p')
        for (var i = 0; i < reiniciarParas.length; i++){
            reiniciarParas[i].textContent = ''
        }

        botaoReinicio.parentNode.removeChild(botaoReinicio)

        campoPalpite.desabled = false
        envioPalpite.desabled = false
        campoPalpite.value = ''
        campoPalpite.focus()

        ultimoResultado.style.backgroundColor = 'white'
 
        numeroAleatorio = Math.floor(Math.random() * 100) + 1

    } 