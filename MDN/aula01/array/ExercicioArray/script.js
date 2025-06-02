let list = document.querySelector('.output')
let totalBox = document.querySelector('#p')
let total = 0
list.innerHTML = ''
totalBox.textContent = ''
//number 1

let products =  ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99']

for (let i = 0; i < products.length; i++){ // number 2
    // number 3
    let separar = products[i].split(':')
    let numPreco = Number(separar[1])
    // console.log(numPreco)

    // number 4
    total += numPreco

    //number 5
    itemText = `${separar[0]} - R$${numPreco}`

    let listItem = document.createElement('li')
    listItem.textContent = itemText
    list.appendChild(listItem)

}

totalBox.textContent = 'Total: $' + total.toFixed(2) // Arredonda o numero e retona com 2 casas decimais após a virgula


/* split, eu tenho um texto e quero separar ele em array, por ex:
 larissa: 25 anos = split(':') será transformado em array ficando 
'larissa' : '25 anos'.Nisso consigo trabalhar com as partes desse array
por ex: nome[0]

join, quando uso o join é ao contrário, tenho um array 'larissa' : '25 ano'
e vou juntar eles para virar uma string, ficari0a join(':') 'larissa: 25 anos'
*/