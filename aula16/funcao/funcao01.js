function parimpar(n){
    if (n%2 == 0){
        return 'Par!'
    }else {
        return 'Impar!'
    }
}

// let res = parimpar(4)
// console.log(res)

//Resumido
console.log(parimpar(4))


//Teste com String
function saudacao(nome){
    return `Olá ${nome}`
}
console.log(saudacao("Larissa"))


// Função calculadora desconto teste

function calculaDesconto(preco, desconto){
    let calculo = preco - (preco * (desconto / 100))

    return calculo
}

console.log(calculaDesconto(200, 5))    