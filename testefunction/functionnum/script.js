function somar(a, b){
    return a + b
}

function mostrarSoma(){
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)

    let resultado = somar(n1, n2)

    if(resultado % 2 == 0){
        alert(`A soma de ${resultado} é Par`)
    }else{
        alert(`A soma de ${resultado} é Impar`)
    }
}

function dobrarSoma(){
        let n1 = Number(document.querySelector('#n1').value)
        let n2 = Number(document.querySelector('#n2').value)
        let res = document.querySelector('#res')
        let resultado = somar(n1, n2)
        res.innerHTML = `O dobro da soma é ${resultado * 2}`
    }

