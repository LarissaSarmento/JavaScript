let todasImg = document.querySelector('.todas-img')
let exibeImg = document.querySelector('.exibe-img')
let sobreposicao = document.querySelector('.sobreposicao')
let dark = document.querySelector('.dark')

let miniaturaImg = document.querySelector('.miniatura-img')

let btn = document.querySelector('button')

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`]
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

for (const image of images){
  const novaImage = document.createElement('img')
  novaImage.setAttribute('src', `image/${image}`)
  novaImage.setAttribute('src', alts[image])
  miniaturaImg.appendChild(novaImage)

  novaImage.addEventListener('click', e =>{
    todasImg.src = e.target.src
    todasImg.alt = e.target.alt
  })
}

btn.addEventListener('click', ()=>{
  const btnClass = btn.getAttribute('class')
  if (btnClass === 'dark'){
    btn.setAttribute('class', 'clarear')
    btn.textContent = 'Clarear'
    sobreposicao.style.backgrundColor = 'rgba(0,0,0,0.5)'
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Dark'
    sobreposicao.style.backgrundColor = 'rgba(0,0,0,0)'
  }
})