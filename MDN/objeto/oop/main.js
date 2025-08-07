/*function createNewPerson(name){
    var obj ={}
    obj.name = name
    obj.greeting = function(){
        alert('Hi! I\'m'+ obj.name + '.')
    }
    return obj
}

let salva = createNewPerson('Salva')
salva.nome
salva.greeting()

// Esse codigo abaixo facilita usando o this para não precisar reescrever igual o de cima para o reuso dessa função


function Person(name){
    this.name = name
    this.greeting = function(){
        alert('Hi! I\'m' + this.name + '.')
    }
}

let person1 = new Person('Bob')
let person2 = new Person('Sarah')

// O new é usado para informar ao navegador que queremos criar uma nova instancia de objeto, seguida pelo nome da função
// com seus parametros obrigatórios contidos em parenteses, e o resultado é armazenado em uma variavel.
// É como se criasse dessa forma

{
    nme:'Bob'
    greeting: function(){
        alert('Hi! I\'m' + this.name + '.')
    }
}

*/

// Abaixo farei o mesmo que está acima, porém com mais dados

function Person(first, last, age, gender, interests){
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function(){
        alert(this.name.first + ' ' + this.name.lest + 'is' + this.age + 
           'years old. He likes ' + this.interests[0] + 'and ' + this.interests[1] + 
        '.')
    }
}

    this.greeting = function(){
        alert('Hi! I\'m' + this.name.first + '.')
    }

    let person1 = new Person('Bob', 'Smith', '32', 'male', ['music', 'skiing'])