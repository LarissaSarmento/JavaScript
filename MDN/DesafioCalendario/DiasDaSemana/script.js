let select = document.querySelector('#month')
let list = document.querySelector('#ulLista')
let h1 = document.querySelector('#ih1')

let modal = document.getElementById('modal')
let overlay = document.getElementById('overlay')
let inputInfo = document.getElementById('inputInfo')
let salvarBtn = document.getElementById('salvarBtn')
let fecharBtn = document.getElementById('fecharBtn')
let modalDia = document.getElementById('modalDia')

let diaSelecionado = null

select.addEventListener('change', function(){
  let escolha = select.value
  let dia = 24
  if(['Sabado','Domingo'].includes(escolha)){
    dia = 10
  }else if(['Segunda','Terça',
    'Quarta','Quinta','Sexta'].includes(escolha)){ // Includes verifica de existe um valor dentro de um array, 
    // e nesse exemplo ficaria, o valor da variavel 'escolha' está dentro desse array? Se sim, entra no bloco if
    dia = 6
  }

  apresentarDias(dia, escolha)
})

function apresentarDias(dia, escolha){
  list.innerHTML = ''
  h1.textContent = escolha
  for(let i = 1; i <= dia; i++){
    let liLista = document.createElement('li')
    liLista.textContent = i

    //Adiciona evento de clique ao dia
    liLista.addEventListener('click', function(){
      diaSelecionado = liLista
      modalDia.textContent = `Dia ${i} - ${escolha}`
      inputInfo.value = ''
      abrirModal()
    })
    list.appendChild(liLista)
  }
}

  function abrirModal(){
    overlay.style.display = 'block'
    modal.style.display = 'block'
  }

  function fecharModal(){
    overlay.style.display = 'none'
    modal.style.display = 'none'
  }

  // Salvar informações
  salvarBtn.addEventListener('click', function(){
    let info = inputInfo.value.trim()
    if(info && diaSelecionado){
      let span = document.createElement('span')
      span.className = 'info'
      span.textContent = `→ ${info}`
      diaSelecionado.appendChild(span)
      }

      fecharModal()
  })

  fecharBtn.addEventListener('click', fecharModal)
  overlay.addEventListener('click', fecharModal)