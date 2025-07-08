let nome = document.querySelector('#iname')
let btn = document.querySelector('button')

let res = document.querySelector('.res')
let img = document.querySelector('#iimg')


function Digitarnome(){
   let nomeDig = nome.value
    if(nome.value === ''){
        window.alert('Digite um nome válido')
    }else{
    res.textContent = `Nome digitado = ${nomeDig}`
    img.style.display = 'block'

    let novoCampoPorJS = document.createElement('img')
    novoCampoPorJS.setAttribute('src', 'pic4.jpg')
    let segundaImg = document.querySelector('.segundaImg')
    segundaImg.appendChild(novoCampoPorJS)    
}
}

btn.addEventListener('click', ()=>{
    Digitarnome()
})

