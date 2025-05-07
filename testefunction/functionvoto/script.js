let idade = document.querySelector('#idade')
let res = document.querySelector('#res')
let resR = document.querySelector('#resR')


function podeVotar(idade){
    if(idade == 0){
        window.alert('Valor inválido')
    }else if(idade <= 16){    
        res.innerHTML += `Idade= ${idade} não pode votar`
    }else if(idade < 17 || idade >= 70){
        res.innerHTML += `Idade= ${idade} Voto opcional`
    }else if(idade > 18 && idade <= 69){
       res.innerHTML += `Idade= ${idade} Voto obrigatório`
    }
}

function resultado(){
    let idadeValue = Number(idade.value)
    return podeVotar(idadeValue)
}

function reutilizarAFuncao(){
    le
    return podeVotar()
}