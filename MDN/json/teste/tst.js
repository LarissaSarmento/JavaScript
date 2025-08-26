/* Essa parte é com modelo de requisição antigo

const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"

request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = "json"
request.send()

let html = document.querySelector('html')
request.onload = function(){
    let armazenaResposta = request.response
    for(i=0; i < armazenaResposta.length;i++){
        let mostrarTela = document.createElement('li')
        mostrarTela.textContent = armazenaResposta[i].name
        html.appendChild(mostrarTela)
    }
}

*/

//Usand o Feat no mesmo exemplo

let header = document.querySelector('header')
let section = document.querySelector('section')

const requestURL =  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"

fetch(requestURL)
.then((response) => response.json())
.then((text) => armazenarResposta(text))
// .catch(error => console.error('Teste erro'))


function armazenarResposta(arrayUrl){
    for(let i=0; i < arrayUrl.length; i++){
        let color = document.createElement('p')
        let localMostrar = document.createElement('ul')
        localMostrar.textContent = arrayUrl[i].name  + '- ' + arrayUrl[i].breed
        header.appendChild(localMostrar)

        color.textContent = 'Cor: ' + arrayUrl[i].color
        section.appendChild(color)     
    } 
}