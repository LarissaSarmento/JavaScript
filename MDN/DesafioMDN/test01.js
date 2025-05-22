var numeroAleatorio = Math.floor(Math.random* 100) + 1 

var campoPalpite =  document.querySelector('.campoPalpite')
var palpites = document.querySelector('.palpite')
var envioPalpite = document.querySelector('.envioPalpite')

var baixoOuAlto = document.querySelector('.baixoOuAlto')
var ultimoResultado = document.querySelector('.ultimoResultado')


var contagemPalpites = 1
var botaoReinicio


function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value)
    if(palpiteUsuario === contagemPalpites){
        palpites.textContent = 'Palpites anteriores: '
    }

    palpites.textContent += palpiteUsuario + " "


    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Acertou'
        ultimoResultado.body.background = 'green'
        baixoOuAlto.textContent = ''
        configFimdeJogo()
    } else if (contagemPalpites === 10){
        ultimoResultado.textContent = 'Atingiu o limite de 10 tentativas'
        baixoOuAlto.textContent = ''
        configFimdeJogo()
    } else{
        ultimoResultado.textContent = 'Errou'
        ultimoResultado.body.background = 'red'
        if (palpiteUsuario < numeroAleatorio ){
            palpites.textContent = 'Valor baixo'
        }else if (palpiteUsuario > numeroAleatorio){
            palpiteUsuario.textContent = 'Valor acima'
        }
    }
    contagemPalpites++
    campoPalpite.value =''

}

envioPalpite.addEventListener('click', conferirPalpite)


    function configFimdeJogo(){
        campoPalpite.desabled = true
        envioPalpite.desabled = true
        botaoReinicio = document.createElement('button')
        botaoReinicio.textContent = 'Iniciar novo jogo'
        document.body.appendChild(botaoReinicio)   
        botaoReinicio.addEventListener('click', reinicioJogo)     
    }

    function reinicioJogo(){
        contagemPalpites = 1

        var reiniciarParas = document.querySelectorAll('.resultadoPras p')
        for (var i = 0; i < reiniciarParas.length; i++){
            reiniciarParas[i].textContent = ''
        }      
        botaoReinicio.parentNode.removeChild(botaoReinicio)

        campoPalpite.desabled = false
        envioPalpite.desabled = false

    }