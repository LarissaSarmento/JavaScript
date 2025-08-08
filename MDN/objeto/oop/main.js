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


function Person1(primeiroNome, segundoNome, idade, musicaFavorita, estudo){
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

let pessoa1 = new Person1('Larissa', 'Sarmento', 24, 'Confortably Numb', ['JS', 'TypeScript'])


// ---------------
function Person(first, last, age, gender, interests){
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function(){
// Primeiro defina uma string e torne-a igual à parte
// da biografia que sabemos que será sempre a mesma.
        let string= this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '
// define uma variável que conterá a parte pronominal de
// a segunda frase
        let pronoun

        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
            pronoun = 'He likes'
        } else if(this.gender === 'famale' || this.gender === 'Famale' || this.gender === 'f' || this.gender === 'F'){
            pronoun = 'She likes'
        } else{
            pronoun = 'They like'
        }
// adicione a sequência de pronomes on ao final da sequência principal
        string += pronoun
// use outra condicional para estruturar a última parte da
// segunda frase, dependendo se o número de interesses
// é 1, 2 ou 3

        if(this.interests.lenght === 1){
            string += this.interests[0] + '.'
        } else if(this.interests.lenght === 2){
            string += this.interests[0] + ' and ' + this.interests[1] + '.'
        }else{  
// se houver mais de 2 interesses, fazemos um loop por eles
// todos, adicionando cada um à string principal seguido por uma vírgula,
// exceto o último, que precisa de um and e um ponto final 
            for(let i =0; i < this.interests.length; i++){
                if(i === this.interests.length -1){
                    string += 'and ' + this.interests[i] + '.'
                }else {
                    string += this.interests[i] + ', '
                }
            }
        }
// finalmente, com a string construída, nós a alertamos()
        alert(string)
    }

    this.greeting = function(){
        alert('Hi! I\'m' + this.name.first + '.')
    }
}

let personEx = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing'])