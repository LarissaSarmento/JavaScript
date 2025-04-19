function tabuada() {
    let num =  document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0){ // O length se o comprimento estiver vazio, ou seja nada digitado
        window.alert('Por favor, digite um número!')
        
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Serve para limpar o campo do select para não fazer calculos um em baixo do outro
        while( c <= 10){
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item) // tab é uma refetencia ao select, e o appendChild é para adicionar um filho dentro do select
            c++
        }
    }
}
