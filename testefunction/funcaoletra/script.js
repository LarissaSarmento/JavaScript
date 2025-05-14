let nom = document.querySelector('#nom')
let res = document.querySelector('#res')
let lista = document.querySelector('#flista')
let valorArray = []



function adicionar(){
    if(nom == ''){
        window.alert('Digite um nome válido')
    }else{
        
    }



    valorArray.push(nom)
    for(let pos in valorArray){
        if(valorArray[0][0] === 'A' && valorArray[0][0] === 'a'){
        let item = document.createElement('option')
        item.text = `'${valorArray}`
        lista.appendChild(item)
        
    }else{
        window.alert('O nome precisa começar com a letra A')
    }
    }
   
}

