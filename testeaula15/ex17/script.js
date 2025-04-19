function tabuada() {
   let num =  window.document.querySelector('#num')
   let tab = window.document.querySelector('#tab')
   let limp = window.document.querySelector('#limpar')

    if(num.value.length == 0){
        window.alert('Número inválido')

    }else{
        n = Number(num.value)
        let c = 1
        limp.addEventListener('click',()=>{
            tab.innerHTML=''
            num.value = ''
        })
        while(c <=10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c} `
            tab.appendChild(item)
            c++
           
        }
    }
    let testdiv = document.createElement('div')
    let testp = document.createElement('p')

    testp.innerHTML = 'teste'

    testdiv.appendChild(testp)

    document.body.appendChild(testdiv)
    
}