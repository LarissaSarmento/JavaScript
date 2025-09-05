"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logar(user, pass) {
    console.log(`User..: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar('Larissa', '213');
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 15);
let s_res = soma2(2, 8).toString();
console.log(n_res);
console.log(s_res); // será uma string
