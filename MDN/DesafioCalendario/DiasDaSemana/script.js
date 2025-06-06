const { createElement } = require("react")

let select = document.querySelector('select')
let ul = document.querySelector('ul')
let h1 = document.querySelector('h1')

select.addEventListener('change', function(){
  let choice = select.value
  let dia = 31
  if(choice === 'February'){
    dia = 28
  } else if(choice === 'April' ||
     choice === 'June' ||
    choice ==='September' ||
  choice === 'November'){
    dia = 30
  }

  createCalendar(choice, dia)
})


function createCalendar(choice, dia){
  h1.textContent = choice
  for(let i = 1; i <= dia; i++){
    let liDia = document.createElement('li')
    liDia.textContent = i
    ul.appendChild(liDia)
  }
}