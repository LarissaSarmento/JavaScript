let num = document.querySelector('#num')
let res = document.querySelector('#res')
let botao = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let resumo = document.querySelector('#resumo')

let valores = []


function repetirNumero(l, nn){
    if(l.indexOf(Number(num.value)) != -1){
        return true
    }else{
        return false
    }
}

function imparOuPar(){
    var n = Number(num.value)   

    let item = document.createElement('option')

    if(n <= 0 && repetirNumero(valores, n)){
        window.alert('Número inválido ou já está na lista')

    }else{
        valores.push(n)

    } if (n % 2 == 0){
        item.innerHTML += (`Numero ${n} par`)
    }else{
        item.innerHTML += (`Número ${n} ímpar`)
    } 
    lista.appendChild(item)

    

    num.focus()
    num.value = '' 
}


 botao.addEventListener('click', imparOuPar) 

function resultado(){

}