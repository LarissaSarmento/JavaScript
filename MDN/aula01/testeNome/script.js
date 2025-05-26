let nome = document.querySelector('#nome')
let res = document.querySelector('#res')
let vetor = []
let resOrdem = document.querySelector('#resOrdem')

let ordem = document.querySelector('#ordem')


let botao = document.querySelector('#enviar')
botao.addEventListener('click', validarNome)

function validarNome(){
    if(nome.value.trim() === ''){
        window.alert('Digite um nome')
        res =  ''
        nome.focus()
    } else if(nome.value.length > 10){
        res.textContent = 'Nome passou do limite'
        nome.value = ''
        nome.focus()
    }else{
        vetor.push(nome.value)
        elementoSelect = document.createElement('select')
        document.body.appendChild(elementoSelect)
        elementoSelect.style.size = '10px'
       // res.innerHTML += `Nome: ${nome.value[nome.value.length - 1]} válido <br>` //Retorna o ultimo caracter da string
        res.innerHTML += `Nome: ${nome.value} válido <br>`
         nome.focus()
        nome.value = ''
        }

    }

    ordem.addEventListener('click', ()=> {
       // let ordenados = vetor.slice().sort((a, b) => a.length - b.length) // Ordema por tamanho
       let ordenados = vetor.slice().sort()
        resOrdem.innerHTML += ordenados.join(', ')
        // for (let pos of ordenados){
        //     resOrdem.innerHTML += `${pos}`
        // }
       
    })
       
   


