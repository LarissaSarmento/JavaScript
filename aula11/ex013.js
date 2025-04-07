var agora = new Date()
var diaSem = agora.getDay()

diaSem = 2

switch(diaSem){// Só funciona com números inteiros e strings, não funciona em intervalos também.
    case 0: 
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break

       default:
        console.log('Dia inválido') 
        break
}