// Função: Cria um novo parágrafo e o insere no fim do HTML

function criarParagrafo(){
    let para = document.createElement('p')
    para.textContent = 'Texto adicionado'
    document.body.appendChild(para)
}

/*
1. Captura referencias de todos os botões na página e armazena isso em um array.
2. Vai até todos os botões e adiciona um event Listener de click 
    Quando cada botão é clicado, a função criarParagrafo() será executada
*/

const botao = document.querySelectorAll('button') // Usou esse all para selecionar todos os botões que estiverem na tela, ele retorna
// NodeList que é uma coleção, semelhando ao array, nisso posso usar o .length depois

for(let i = 0; i < botao.length; i++){
    botao[i].addEventListener('click', criarParagrafo)
}