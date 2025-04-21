let num = [5, 8, 4, 2, 7]
num.sort() // Organiza os elementos em ordem
num.push(1) // Acrescenta o valor 1 no final
console.log(num)
console.log(`Posições vetor: ${num.length}`) 
console.log(`Mostrar valor na posição 2: ${num[2]}`)
let pos = num.indexOf(7) // Procura o valor 7 e retorna a posição
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}

