let nom = document.querySelector('#nom')
let res = document.querySelector('#res')
let lista = document.querySelector('#flista')
let valorArray = []

function adicionar(nomeDigitado){
    let nome = nomeDigitado.trim()

<<<<<<< HEAD
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
=======

function nome(n){
   let n = nom.value.trim()
   if(n !== ''){
    return true
   }else{
    return false
   }
    }


function adicionar(){
    for(pos in valorArray){
        if(valorArray[0][0] === 'A' || valorArray[0][0] === 'a'){
            let item = document.createElement('option')
            item.text = `${valorArray}`
            lista.appendChild(item)
            valorArray.push(n)
        }else{
            window.alert('Digite um nome começando com a letra A')
        }
>>>>>>> 4bcd142509c46fdb11b3374e73ece9d164a8921f
    }
}

document.getElementById('btnAdicionar').addEventListener('click', function (){
    adicionar(nom.value)
})