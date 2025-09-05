// Conceito de enumeradores, ENUMS
let dias = {
    segunda: ""
};
var edias;
(function (edias) {
    edias[edias["domingo"] = 0] = "domingo";
    edias[edias["segunda"] = 1] = "segunda";
    edias[edias["terca"] = 2] = "terca";
    edias[edias["quarta"] = 3] = "quarta";
    edias[edias["quinta"] = 4] = "quinta";
    edias[edias["sexta"] = 5] = "sexta";
    edias[edias["sabado"] = 6] = "sabado";
})(edias || (edias = {}));
console.log(edias.domingo);
console.log(edias["sexta"]);
console.log(edias[2]); // Exibe a chave que está associada a este valor 2
const d = new Date();
console.log(d);
console.log(d.getDate()); // Busca o dia de hoje no caso dia 28 
console.log(d.getDay()); // Dia da semana, por padrão domingo começa como zero
console.log(edias[d.getDay()]); // Fez a relação do getDay com o enum
//------------
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#of0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 10] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 11] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 12] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.ADMIN);
const tp = tipoUsuario.SUPER;
console.log(tp);
