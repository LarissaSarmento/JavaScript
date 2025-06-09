let select = document.querySelector('#theme')
let html = document.querySelector('.output')
let img = document.querySelector('#img')


select.addEventListener('change', function(){
    let escolha = select.value
    img.style.display = 'none'
    switch(escolha){
    
        case 'black':
        mudarCor('black', 'white')
        mostrarMensagem('teste')
        break

        case 'white' :
        mudarCor('white', 'black')
        break

        case 'yellow':
       mudarCor('yellow', 'black')
        break

        case 'purple' :
        mudarCor('purple', 'white')
        break

        case 'blue' :
        mudarCor('blue', 'white')
        img.style.display= 'block'
        break

        case 'radicore':
        mudarCor('black', 'black')
        break
    }

})

function mudarCor(fundo, corLetra){
    html.style.backgroundColor = fundo
    html.style.color = corLetra
}

function mostrarMensagem(msg){
    window.alert(`${msg}`)
}