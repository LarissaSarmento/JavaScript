let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']

let admitted = document.querySelector('.admitted')
let refused = document.querySelector('.refused')

admitted.textContent = 'Admit: '
refused.textContent = 'Refused: '

for(let i = 0; i < people.length; i++){
    if(people === 'Phil' && people === 'Lola'){
        let remover = people.splice(4,6)
        refused.textContent += remover + ','
    } else{
        admitted.textContent +=  people[i] + ','
    }
}



