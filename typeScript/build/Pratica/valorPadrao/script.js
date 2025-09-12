"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const logo_jfif_1 = require("../../imagens/logo.jfif");
let percorrerProd = [
    new Produtos("Blusa", 15, logo_jfif_1.default)
];
