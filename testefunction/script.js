// function saudacao(nome){
//     return `Olá, ${nome}! Seja bem-vindo!`
// }

// function mostrarSaudacao() {
//     let nome = document.querySelector('#nome').value
//     document.querySelector('#res').innerHTML = saudacao(nome)
// }


// function numero(numero){
//     return `Numero digitado = ${numero.value}`
// }

// function mostrarNumero(){

//     let numero = document.querySelector('#num').value
//     document.querySelector('#res').innerHTML = numero(numero.value)
// }

//------------------------------
/*
let num = document.querySelector('#num')
let res = document.querySelector('#res')


function calculoNumero(valor){
    return valor * valor
}

function par(valor){
    if ( valor%2 == 0){
        window.alert('Numero Par')
    }else{
        window.alert('Numero Impar')
    }
}

function usarONumero(){
    let valor = Number(num.value)
    if(valor == 0){
        window.alert('Numero invalido')
    }else{
        res.innerHTML += `Resultado: ${calculoNumero(valor)}`
        par(valor)
    }
}
*/

let nome = document.querySelector('#nome')
let res = document.querySelector('#res')

function usarNome(nome){
     res.innerHTML = `O nome é ${nome}`
}

function mostrarNome(){
    let valorDigitado = nomeInput.value
    if(valorDigitado.trim() === ""){ // trim é para evitar nomes só com os espaços
        window.alert("Digite um nome válido")
    }else{
        usarNome(valorDigitado)
    }
}
