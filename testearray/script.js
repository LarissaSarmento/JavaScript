function array() {
    let resnomes = document.querySelector('#resnomes')
    let resletras = document.querySelector('#resletras')

    frutas = ['morango', 'uva', 'banana', 'coco']

   for(let i = 0; i < frutas.length; i++){
        resnomes.innerHTML += ` ${frutas[i]}`
        resletras.innerHTML += `${frutas[i].length}`
   }
}

function arrayy() {
    let n = document.querySelector('#num')
    let s = document.querySelector('#som')
    let p = document.querySelector('#par')

    let num = [5, 8, 6, 3, 4]
    let soma = 0
    
    n.innerHTML = 'Números:'
    s.innerHTML = 'Soma:'
    p.innerHTML = 'Pares:'
    
    for(let ps = 0; ps < num.length; ps++){
     n.innerHTML += `${num[ps]}`

              
     if(num[ps] % 2 == 0){
          p.innerHTML += `${num[ps]}`
     }

     soma += num[ps]
     
    }
         s.innerHTML += `${soma}`
}

// function multiplicador(){
//      let calcnum = document.querySelector('#calcnum')
//      let caixa = document.querySelector('#tabuada')
//      let mostrar = document.querySelector('#mostrar')

//      if(calcnum.value.length == 0){
//           window.alert ('Número inválido')
//      }else{
//           calcn = Number(calcnum.value)
//           mostrar.innerHTML = ''
//           for(let i = 1; i <= 10; i++){
//            mostrar.innerHTML += `${calcn} x ${i} = ${calcn * i} <br>`
//           }
          
//      }
// }

function gerarTabuada(numero){
     let mostrar = document.querySelector('#mostrar')

          mostrar.innerHTML = ''
     for(i = 1; i<= 10; i++){
          mostrar.text += `${numero} x ${i} = ${numero * i}<br>`
     }
}

function multiplicador(){
     let calcnum = document.querySelector('#calcnum')

     if(calcnum.value.length == 0){
          window.alert('Numero invalido')
     }else {
          calcn = Number(calcnum.value)
          gerarTabuada(calcn)
     }
}