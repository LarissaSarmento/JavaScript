// type Assertion e TypeCast

//Type Assertion é basicamente afirmação de tipo, quando preciso afirmar que um tipo desconhecido é de um tipo conhecido

let nvalor:number
let svalor:string
let uvalor:unknown

uvalor = 10
// nvalor=uvalor // Se eu tentar usar assim não vai dar certo, usar associação direto do tipo Unkown ao tipo number a não ser que eu faça uma afirmação de tipo que é o type assetion
// nvalor=<number><unknown>svalor
// COnverter um tipo number para string e string para number

nvalor=<number>uvalor
// Tipo numerico para string seria:
svalor=nvalor.toString() 

svalor=<string>uvalor
svalor+=10

console.log(typeof(uvalor))
console.log(uvalor)

console.log(typeof(nvalor))
console.log(nvalor)

console.log(typeof(svalor))
console.log(svalor)