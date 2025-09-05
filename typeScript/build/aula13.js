function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5));
//Poss também tornar um parametro opcional, para indicar que é opcional eu coloco um interrogação na frete dele, posso usar ou não na chamada da função
function novoUser(user, pass, nome) {
    console.log(`User:${user}`);
    console.log(`Pass:${pass}`);
    console.log(`NOme:${nome}`);
}
novoUser('br', '125');
