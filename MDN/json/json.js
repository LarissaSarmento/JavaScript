
let requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

var header = document.querySelector("header");
var section = document.querySelector("section");

let request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = "json"
request.send()

request.onload = function() {
    let superheroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}