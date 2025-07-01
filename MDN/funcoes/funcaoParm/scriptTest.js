let botao = document.querySelector('button')

    botao.addEventListener('click', ()=> {
        TextoNaTela('Texto aqui','chat')
    })


function TextoNaTela(msgTexto, msgType){
    let body = document.querySelector('body')

    let caixa = document.createElement('div')
    caixa.setAttribute('class', 'msgBox')
    body.appendChild(caixa)

    let msg = document.createElement('p')
    msg.textContent = msgTexto
    caixa.appendChild(msg)

    let fechar = document.createElement('button')
    fechar.textContent = 'x'
    caixa.appendChild(fechar)

    fechar.addEventListener('click', () =>{
        caixa.parentNode.removeChild(caixa)
    })

    if(msgType ==='chat'){
        caixa.style.backgroundColor = 'red'
    }
}

