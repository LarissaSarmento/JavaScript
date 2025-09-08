let teste = document.querySelector('#teste');
teste === null || teste === void 0 ? void 0 : teste.addEventListener('click', () => {
    window.alert('test');
});
class Produtos {
    constructor(nome, preco, img) {
        this.nome = nome;
        this.preco = preco;
        this.img = img;
    }
}
