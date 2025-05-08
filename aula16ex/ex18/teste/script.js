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
    res.innerHTML += `Valores adicionados = ${valores} `
    lista.innerHTML = ''
    valores = []
}