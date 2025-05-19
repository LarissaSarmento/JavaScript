let nom = document.querySelector('#nom')
let res = document.querySelector('#res')
let lista = document.querySelector('#flista')
let valorArray = []

function adicionar(nomeDigitado){
    let nome = nomeDigitado.trim()

    if(nome === ''){
        window.alert('Digite um nome válido')
    }else if (nome[0].toLowerCase() !== 'a'){
        window.alert('O nome precisa começar com a letra A')
    } else {
        valorArray.push(nome)
        let item = document.createElement('option')
        item.text = nome
        lista.appendChild(item)


        nom.value = ''
        nom.focus()
    }
}

document.getElementById('btnAdicionar').addEventListener('click', function (){
    adicionar(nom.value)
})