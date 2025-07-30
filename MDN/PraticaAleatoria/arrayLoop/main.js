let res = document.querySelector('#res')
let imgAqui = document.querySelector('#imgAqui')
let imgGrande = document.querySelector('#imgGrande')
let btn = document.querySelector('button')

let sobreposicao = document.querySelector('.sobreposicao')
let vogais = ['a', 'e', 'i', 'o', 'u']


for (let letra of vogais){
    res.innerHTML += `${letra} <br>`
}

// for (let i = 0; i <= vogais.length; i++){
//     res.innerHTML += `${vogais[i]} <br>`
// }

let images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

for(let image of images) {
    let criar = document.createElement('img')
    criar.setAttribute('src', `images/${image}`) 
    // criar.setAttribute('alt', 'teste')
    imgAqui.appendChild(criar)

    criar.addEventListener('click', e=>{
        imgGrande.src = e.target.src // onde está o caminho da imagem grande, altera para o caminho da imagem que foi clicado.       
    })
}

btn.addEventListener('click', ()=>{
    let btnClass = btn.getAttribute('class')
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'claro')
        btn.textContent = `Clarear`
        sobreposicao.style.backgroundColor = 'black'
    }else{
        btn.setAttribute('class', 'black')
        btn.textContent = `Dark`
        sobreposicao.style.backgroundColor = 'white'
    }
})
