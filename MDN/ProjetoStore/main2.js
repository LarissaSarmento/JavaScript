

class prod{
    constructor(nome, preco, adCarrinho){ // Só passo no construtor os métodos que sempre precisarão criar um novo
    this.nome = nome
    this.preco = preco
}

        exibeNome() { // Na classe eu passo os métodos que serão repetidos ou seja não precisa criar novo toda vez
        let nomeP = document.querySelector('.nome')
        nomeP.textContent = this.nome
    }
     exibePreco() { // Na classe eu passo os métodos que serão repetidos ou seja não precisa criar novo toda vez
        let nomeP = document.querySelector('.preco')
        nomeP.textContent = this.preco
    }

        adCarrinho (){}
}

let prod1 = new prod('Caneca', '28.8')
prod1.exibeNome()
prod1.exibePreco()
let prod2 = new prod('Camisa', '499.99')
