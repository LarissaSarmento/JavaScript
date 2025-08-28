"use strict";
// Array somente de leitura
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = [20, 30, 40]; // Aqui declarei array do tipo number
let tnumeros = [20, 30, 40, 'string']; // Outra forma que também pode ser usada para declarar tipo em array
let ttnumeros = [20, 30, 40, 'string']; // Outra forma, igual a de cima
numeros.push(10); // insere no final
numeros.unshift(22); // insere no inicio
numeros.pop(); // remove do inicio
numeros.shift(); // remove do final
console.log(numeros);
// Quando não quero permitir de nenhuma forma que sejam inseridos ou retirados novos valores do array
let numeros_ro = [100, 200, 300]; // Se eu tentar usar numeros_ro.push, não estará disponível esse método push, pois o ReadonlyArray não permite, é um array somente leitura
