let select = document.querySelector('select')
let list = document.querySelector('ul')
let h1 = document.querySelector('h1')


select.addEventListener('change', function(){
  let escolha = select.value
  let dia = 24
  if(escolha === 'Sabado' || 'Domingo'){
    dia = 10
  }else if(escolha === 'Segunda' || escolha === 'Terça'||
    escolha === 'Quarta' || escolha === 'Quinta' || escolha === 'Sexta'
  ){
    dia = 6
  }

  apresentarDias(dia, escolha)
})

function apresentarDias(dia, escolha){
  h1.textContent = escolha
  for(let i = dia; i <= dia; i++){
    let li = document.createElement('li')
    list.textContent = i
    ul.appendChild(li)
  }
}
