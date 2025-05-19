const para = document.querySelector('p')

para.addEventListener('click', adicionar)

function adicionar(){
    let nome = prompt('Insira um nome')

    para.textContent = 'Jogador 1:' + nome
}