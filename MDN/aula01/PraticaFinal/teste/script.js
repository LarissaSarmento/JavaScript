let nome = document.querySelector('#inome')
let botao = document.querySelector('#botao')
let res = document.querySelector('#res')

function arrayAleatorio(array){
    let aleatorio = Math.floor(Math.random() * array.length)
    return array[aleatorio]
}

let textoHistoria = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin',
'Big Daddy',
'Father Christmas']

let insertY = ['the soup kitchen',
'Disneyland',
'the White House']

let insertZ = ['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away']

botao.addEventListener('click', result)
function result(){
    texto = textoHistoria

    if(nome.value !== ''){
    let inome = nome.value
    texto = texto.replace('Bob', inome)
}


    if(document.getElementById('us').checked){
        let peso = Math.round(300 / 14) + 'PEDRA'
        let temperatura = Math.round((94 - 32) * 5 / 9) + 'CENTIGRADO'

        texto = texto.replace('300 pounds', peso)
        texto = texto.replace('94 fahrenheit', temperatura)
    }


    let itemX = arrayAleatorio(insertX)
    let itemY = arrayAleatorio(insertY)
    let itemZ = arrayAleatorio(insertZ)

    texto = texto.replace(':insertx:', itemX)
    texto = texto.replace(':inserty:', itemY)
    texto = texto.replace(':insertz:', itemZ)

    res.textContent = texto
    res.style.visibility = 'visible'

    nome.value = ''
}