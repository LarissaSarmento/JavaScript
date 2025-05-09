 let num = document.querySelector('#fnum')
 let lista = document.querySelector('#flista')
 let res = document.querySelector('#res')
 let valores = []

/*
function adicionar(){
    let n = Number(num.value)
    if(num.value === '' || n <=0 || n > 100){
        window.alert('Numero invalido')
    }else{
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        valores.push(n)
    }
}
*/

function adicionar() {
    let n = Number(num.value)
    if(num.value === '' || n <= 0 || n > 100){
        window.alert('Numero invalido')
    }else{
       item = document.createElement('option') 
       item.text = `Adicionado valor ${n}`
       lista.appendChild(item)
       valores.push(n)
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    // res.innerHTML += `Valores adicionados = ${valores} `
    // lista.innerHTML = ''
    // valores = []
    if(valores.length == 0){
        window.alert('Adicione um numero antes de seguir')
    }else{
       let total = valores.length
       let maior = valores[0]
       let menor = valores[0]

    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
        }
       media = soma / total

     res.innerHTML = ''
     res.innerHTML += `${total}<br>`
     res.innerHTML += `${maior}<br>`
     res.innerHTML += `${menor}<br>`
     res.innerHTML += `${media}<br>`
     res.innerHTML += `${soma}`
}

}