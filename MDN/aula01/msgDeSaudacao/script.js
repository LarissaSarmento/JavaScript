let list = document.querySelector('.output')
// list.innerHTML = ''

let greetings = ['Happy Birthday', 'Merry Christmas my love',
    'A happy Christmas to all the family', 'You\'re all I want for Christmas',
    'Get well soon'
]

// function saudacaoNatal(){

for (let i = 0; i < greetings.length; i++){
    let input = greetings[i]
    if(greetings[i].indexOf('Christmas') !== -1){
        let result = input
        let listItem = document.createElement('li')
        listItem.textContent = result
        list.appendChild(listItem)
    }
}
// }
// let botao = document.querySelector('button')
// botao.addEventListener('click', saudacaoNatal)