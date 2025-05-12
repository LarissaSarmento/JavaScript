    let num  = document.querySelector('#fnum')
    let lista = document.querySelector('#flista')
    let res = document.querySelector('#res')
    let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}   

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // O push é uma função por isso os ()
        let item =  document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
} 

function finalizar(){
    if(valores.length == 0){ // Usa length porque é um array, se for valor de um input seria .value
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length // Quantidade de indices
        let maior = valores[0]
        let menor = valores[0]
        let soma= 0
        let media = 0
        for(let pos in valores){ // é o mesmo que for(let i = 0; i < valores.length; i++)
            soma += valores[pos] // Soma quantidade dos valores digitados
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao lado, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
        
    }
}