let array = [1,2,3,4,5]
for (let i = 0; i < array.length; i++){
    // console.log(array)
}


let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

let myArray = myData.split(',')
let myNewString = myArray.join(',')
// myArray.length
// myArray[0]
// let teste = myArray[1]
//  myArray[myArray.length - 1]
myArray.push('teste') // Insere Item no ultimo indice

let removerItemFinal = myArray.pop() // Remover o ultimo item do array

myArray.unshift('InicioDoArray')

let removerItemInicio = myArray.shift()

console.log(removerItemFinal)
console.log(myArray)
console.log(removerItemInicio)

// -----------------------------------------------

let email = "teste@teste.com.br"
let partes = email.split('@')
let mascarado = partes[0].slice(0, 2) + "***@" + partes[1]

// console.log(mascarado)