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

let html = document.querySelector('html')
const requestURL =  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"

fetch(requestURL)
.then((response) => response.json())
.then(armazenaResposta => {
    for(let i=0; i< armazenaResposta.length; i++){
        let mostrarTela = document.createElement('li')
        mostrarTela.textContent = armazenaResposta[i].name
        html.appendChild(mostrarTela)
    }
})
.catch(error => console.error('Teste erro'))

