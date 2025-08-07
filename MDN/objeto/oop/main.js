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


function Person(primeiroNome, segundoNome, idade, musicaFavorita, estudo){
    this.nome = {
        primeiroNome: primeiroNome,
        segundoNome: segundoNome
    }
    this.idade = idade
    this.estudo = estudo
    this.musicaFavorita = musicaFavorita
    this.estudo = estudo
    this.frase = function () {
        alert('Amar a si mesmo é conhecer o mundo!')
    }
    this.bio = function(){
        alert(this.nome.primeiroNome + ' ' + this.nome.segundoNome + 'com idade: ' + this.idade + 'musica favorita ' + this.musicaFavorita)
    }
}

let pessoa1 = new Person('Larissa', 'Sarmento', 24, 'Conform Numb', ['JS', 'TypeScript'])