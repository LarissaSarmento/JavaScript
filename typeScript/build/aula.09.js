"use strict";
// Conceito de enumeradores, ENUMS
Object.defineProperty(exports, "__esModule", { value: true });
let dias = {
    segunda: ""
};
var edias;
(function (edias) {
    edias[edias["domingo"] = 1] = "domingo";
    edias[edias["segunda"] = 2] = "segunda";
    edias[edias["terca"] = 3] = "terca";
    edias[edias["quarta"] = 4] = "quarta";
    edias[edias["quinta"] = 5] = "quinta";
    edias[edias["sexta"] = 6] = "sexta";
    edias[edias["sabado"] = 7] = "sabado";
})(edias || (edias = {}));
console.log(edias.domingo);
