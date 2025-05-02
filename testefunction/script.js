// function saudacao(nome){
//     return `Olá, ${nome}! Seja bem-vindo!`
// }

// function mostrarSaudacao() {
//     let nome = document.querySelector('#nome').value
//     document.querySelector('#res').innerHTML = saudacao(nome)
// }


function numero(numero){
    return `Numero digitado = ${numero.value}`
}

function mostrarNumero(){

    let numero = document.querySelector('#num').value
    document.querySelector('#res').innerHTML = numero(numero.value)
}