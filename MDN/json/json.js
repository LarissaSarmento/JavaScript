
let requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

var header = document.querySelector("header");
var section = document.querySelector("section");

// ----- Recuperando os dados do JSON e convertendo em OBJETO JS ------

let request = new XMLHttpRequest() // XMLHtmlRequest é a api para obter o json, é um construtor, aqui está criando uma instancia.
request.open('GET', requestURL) // Abrindo uma solicitação, para isso preciso de um método HTTP para fazer a solicitação de rede, nesse caso o GET, e a URL do arquivo JSON

request.responseType = "json" // Para que a API que obten o JSON saiba que é JSON e que isso deve ser convertido nos bastidores em um objeto JS
request.send() // Envia a solicitação

request.onload = function() { // O onload é um evento de carregamento, acionado no objeto de solicitação, ele é acionado quando a resposta é retornada com sucesso.
    let superHeroes = request.response // Armazena a resposta a solicitação na variavel superHeroes
    populateHeader(superHeroes) // Preencherá o Header com os dados corretos, inserirá no Header
    showHeroes(superHeroes) // Criará uma ficha de informações para cada herói da equipe de inserirá na Sectios
}

// ------ Usar o Header e o Section mencionados acima

function populateHeader(jsonObj){ // Chamo esse parametro jsonObj para lembrar que foi originado do JSON
    let myH1 = document.createElement('h1') // Crio o h1 para ele ser o squadName do json
    myH1.textContent = jsonObj['squadName']
    header.appendChild(myH1) // Inserido no Header do html

    let myPara = document.createElement('p')
    myPara.textContent = 
    'Hometown: ' + jsonObj['homeTown'] + '// Formed: ' + jsonObj['formed']
    header.appendChild(myPara)
}

function showHeroes(jsonObj){
    let heroes = jsonObj['members']

    for(let i=0; i< heroes.length; i++){
        let myArticle = document.createElement('article')
        let myH2 = document.createElement('h2')
        let myPara1 =  document.createElement('p')
        let myPara2 = document.createElement('p')
        let myPara3 = document.createElement('p')
        let myList = document.createElement('ul')


        myH2.textContent = heroes[i].name
        myPara1.textContent = 'Identidade Secreta: ' + heroes[i].secretIdentity
        myPara2.textContent = 'Age: ' + heroes[i].age
        myPara3.textContent = 'Superpowers:'

        let superPowers = heroes[i].powers
        for (let j=0; j < superPowers.length; j++){
            let listItem = document.createElement('li')
            listItem.textContent = superPowers[j]
            myList.appendChild(listItem)
        }

        myArticle.appendChild(myH2)
        myArticle.appendChild(myPara1)
        myArticle.appendChild(myPara2)
        myArticle.appendChild(myPara3)
        myArticle.appendChild(myList)

        section.appendChild(myArticle)

    }
}