
class Prod{
    constructor(nome, preco, img, adCarrinho){ // Só passo no construtor os métodos que sempre precisarão criar um novo
    this.nome = nome
    this.preco = preco
    this.img = img
    this.adCarrinho = adCarrinho
}

        exibeNome() { // Na classe eu passo os métodos que serão repetidos ou seja não precisa criar novo toda vez
        let nomeP = document.querySelector('.nome')
        nomeP.textContent = this.nome
    }
     exibePreco() { // Na classe eu passo os métodos que serão repetidos ou seja não precisa criar novo toda vez
        let nomeP = document.querySelector('.preco')
        nomeP.textContent = this.preco
    }
}

let produtos = [
    new prod('Caneca', '299,90','./image/canecaPinkFloyd.webp'),
    new prod('Camisa', '785,50', './image/camisaPinkFloyd.webp'),  
]

let container = document.querySelector('#produtos-container')
produtos.forEach(p =>{

   let localProdutos = document.createElement('div')

   localProdutos.innerHTML= `
   <img src="${p.img}" alt="${p.nome}">
   <h2>${p.nome}<\h2>
   <p>${p.preco}<\p>
   <button>Adicionar Carrinho</button>
   `
   
   container.appendChild(localProdutos)
})

class ProdFilho extends Prod() {
    
}
