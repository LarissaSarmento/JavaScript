let num = document.querySelector('#num');
let res = document.querySelector('#res');
let botao = document.querySelector('#botao');
let armazValor = [];
const verificaNum = (n) => {
    if (n === 0) {
        res.textContent = `Digite um número válido`;
    }
    else if (n % 2 === 0) {
        res.textContent = `Número par`;
    }
    else {
        res.textContent = `Número ímpar`;
    }
};
botao.addEventListener('click', () => {
    let valor = Number(num.value);
    armazValor.push(valor);
    verificaNum(valor);
});
