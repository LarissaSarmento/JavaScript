function numeros() {
    let num = document.querySelector('#num')
    let res = document.querySelector('#res')

    if (num.value.length == 0 ){
        window.alert('Número inválido')
    } else {
        n = Number(num.value)
        res.innerHTML= ''
        if(n % 2 == 0){
            for(n = 1; n <= 20; n++){
                if(n % 2 == 0){
                    res.innerHTML += (` ${n}`)
                }
              
               } 
        }else {
            res.innerHTML = ('Número Ímpar')
        }     
    }
}