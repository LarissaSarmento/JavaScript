let num = document.querySelector('#num')
let res = document.querySelector('#res')
let botao = document.querySelector('#botao')
let lista = document.querySelector('#lista')

function imparOuPar(){
    var n = Number(num.value)
    let item = document.createElement('option')
    item.textContent = ''
    lista.appendChild(item)
    lista.style.size = '10px'
    if(n <= 0){
        window.alert('Digite um número válido')
    }else if (n % 2 == 0){
        lista.textContent = ('Numero par')
    }else{
        lista.textContent = ('Número ímpar')
    }   

    num.focus()
    num.value = ''
}

 botao.addEventListener('click', imparOuPar)
