"use strict";
// NULL - UNDEFINED - UNKOWN
Object.defineProperty(exports, "__esModule", { value: true });
// NULL - Ele é um valor nulo, eu posso deixar uma variavel nula, mas nulo não é o mesmo que vazio, ele tem um tipo de valor vazio
let vnome;
vnome = "Larissa";
console.log(vnome);
// UNDEFINEd- Quando por ex uma var não tem tipo ela será any, com valor indefinido
let vnome2;
console.log(vnome2);
//UNKNOW- É um tipo desconhecido ex:
let vnome3 = vnome; // Unknown só pode ser atribuido em tipos unknown ou any
let vnum = vnome3;
console.log(vnum);
