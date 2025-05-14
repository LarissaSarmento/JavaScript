 let num = document.querySelector('#fnum')
 let lista = document.querySelector('#flista')
 let res = document.querySelector('#res')
 let valores = []

/*function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option') 
       item.text = `Adicionado valor ${num.value}`
       lista.appendChild(item)
    }else{
       window.alert('Insira valor válido')
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
        soma = 0
        media = 0
        maior = valores[0]
        menor = valores[0]

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
*/

// ---------------------------- Testando com Texto
function pegarValor(){
    let valor = num.value.trim()
    adicionar(valor)
}

function islista(nome,l){
    if(l.indexOf(nome) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(n){
    if(n != '' && !islista(n, valores)){ // valores.includes verifica se o nome está dentro do array
         valores.push(n)
        let item = document.createElement('option')
        item.text = `${n}`
        lista.appendChild(item)

    }else{
         window.alert('Digite um nome ou nome já encontrado na lista')
    }
      num.value = ''
      num.focus()
}

function finalizar(){

    maior = valores[0]
       for(pos in valores){
           res.innerHTML += `${valores[pos]}<br>`
           if(valores[pos] > maior)
            maior = valores[pos]
        }
        res.innerHTML += `Quantidade de arrays ${valores.length}<br>`
        res.innerHTML += `Maior array= ${maior}<br>`
    }
