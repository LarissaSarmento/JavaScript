let nom = document.querySelector('#nom')
let res = document.querySelector('#res')
let lista = document.querySelector('#flista')
let valorArray = []



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
    }
}

