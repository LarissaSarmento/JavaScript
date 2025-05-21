let num = document.querySelector('#num')
let res = document.querySelector('#res')
let botao = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let resumo = document.querySelector('#resumo')
let limpar = document.querySelector('#limpar')

let valores = []
 let par = []
 let impar = []


function numero(inum){
    if(inum <= 0){
        return false
    }else{
        return true
    }
}

function repetirNumero(l, nn){
    if(l.indexOf(Number(nn)) != -1){
        return true
    }else{
        return false
    }
}

function imparOuPar(){
    var n = Number(num.value)   

    let item = document.createElement('option')

    if(numero(n) && !repetirNumero(valores, n)){
        // window.alert('Número inválido ou já está na lista')
        valores.push(n)  
    }else{
        window.alert('Número inválido ou já está na lista')
        item = ''
        num.value = ''
        num.focus()
    }

     if (n % 2 == 0){
        item.innerHTML += (`Numero ${n} par`)
        par.push(n)      
    }else{
        item.innerHTML += (`Número ${n} ímpar`)
        impar.push(n)
    } 
    lista.appendChild(item)

    

    num.focus()
    num.value = '' 
}


 botao.addEventListener('click', imparOuPar) 

function resultadoResumo(){   // Aqui vou mostrar o menor numero digitado o maior, o total
   
    let maior = 0
    let menor = 0
    let soma = 0
   
    
    for(pos in valores){
        soma += valores[pos]
    }

    for(pos in par){
        if(par[pos]> maior){
            maior = par[pos]
        }
    }


    res.innerHTML = `Quantidade de valores digitados: ${valores.length}<br>`

    res.innerHTML += `Números pares: ${par.join(',')} <br>`
    res.innerHTML += `Número impares: ${impar.join(',')}<br>`
    res.innerHTML += `Maior número par digitado: ${maior}<br>`
    res.innerHTML += `A soma de todos os valores = ${soma}`


    
    // res.innerHTML = `Quantidade de números impares: ${impar[]} <br>`
}
resumo.addEventListener('click', resultadoResumo)

function limparCampos(){
    res.innerHTML = ''
    lista.innerHTML = ''
    num.focus()
}

limpar.addEventListener('click', limparCampos)

