// Função Anonima vou utilizar sempre que eu não quiser declarar uma função
// Quando eu precisar passar uma função de callback para uma outra função ou uma função que exija callback eu posso criar uma Arrow function, por ex: map, filter, foreach, elas exiem função de callback 
// Quando tem let e function o JS eleva ele, coloca como prioridade
iteste(); // Posso chamar ela aqui em cima, porque o JS prioriza a function, então internamente o function vai para cima
function iteste() {
    console.log("Teste");
}
// Isso não acontece quando usa uma função anonima ex:
const tteste = (txt) => {
    console.log(txt);
};
// Utilizando retorno na função anonima
const isoma = (n1, n2 = 1) => {
    return n1 + n2;
};
tteste("CursoTS"); // Obrigatoriamente tem que chamar a função em baixo, depois da criação
tteste("YouTube");
tteste();
console.log(isoma());
//Utilizando array no parametro
const isoma1 = (n1) => {
    let s = 0;
    n1.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40, 50];
console.log(isoma1(numer));
// -----------------------
// ARROW FUNCTION - É chamada assim por causa desse operador =>, a declaração de uma função anonima sempre será associada a uma variavel ou const, porque não tem uma declaração efetivamente, ela é aninima
// 
