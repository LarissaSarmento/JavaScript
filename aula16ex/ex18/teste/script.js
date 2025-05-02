let num = document.querySelector('#fnum')
let flista = document.querySelector('#flista')
let res = document.querySelector('#res')
let vetor =  []

function verificaNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function estaNalista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
     
}

function adicionar(){
    if (verificaNumero(num.value) && !estaNalista(num.value, vetor)){ 
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        flista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(){
        
    }
}

