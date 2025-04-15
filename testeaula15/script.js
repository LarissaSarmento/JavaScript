function contar() {
    let ini = window.document.querySelector('#ini')
    let fim = window.document.querySelector('#fim')
    let pass = window.document.querySelector('#pass')
    let res = window.document.querySelector('#res')

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pass.value)

    if (p <= 0) {
        window.alert('Passo inválido, condere passo 1')  
        p = 1    
    }

    if(i == 0 || f == 0) {
        res.innerHTML = 'Impossível contar '
    } else {
        res.innerHTML = 'Contando...'
    } 

    if(i <= f){
    for(let c = i; c <= f; c += p){
        res.innerHTML += `${c}`
    }      
}else {
    for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c}`
    }
}

}