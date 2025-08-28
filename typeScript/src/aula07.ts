// O JS não permite trabalhar com array de duplas, mas com ts isso é permitido

let coisas:(number|string)[]=[10,20,30, "string"] // Aqui eu não especifico onde ficará uma string e um number


let tcoisas:[string,number,boolean]=["primeiraString", 20, true] //Tem que sempre seguir o que foi declarado
tcoisas[2]=false //Posso alterar de true para false o boolean
tcoisas.push("acrescentandoString",22,false) // Aqui tem que se atentar que para acessar os indices eles só buscam do padrão criado acima, ou seja 0,1,2 os que acrescentam não tem como por ex tcoisas[3]

console.log(tcoisas)
console.log(tcoisas[0]) // Vai imprimir apenas o primeiro indice

// Poderia usar nesse array o Readonly, somente leitura, que tem apenas no ts, nisso não conseguirira alterar nenhuma informação desse array