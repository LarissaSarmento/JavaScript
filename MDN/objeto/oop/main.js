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
}
    Person.prototype.bio = function(){
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
            for(let i = 0; i < this.interests.length; i++){
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

    // this.greeting = function(){
    //     alert('Hi! I\'m' + this.name.first + '.')
    // }


Person.prototype.greeting = function() {
    alert('Hi! I\'m' + this.name.first)
}

Person.prototype.farewell =  function(){
    alert(this.name.first + 'has left the building. Bye for now!')
}

let personEx = new Person('Tammi', 'Smith', 32, 'm', ['music', 'skiing', 'kickboxing'])
/*
"Uma classe (ou função construtora) é um molde que define propriedades e métodos.
Ao usar new, você cria instâncias (objetos) que herdam métodos do protótipo e têm suas próprias propriedades."

*/


function Teacher(first, last, age, gender, interests, subject){
    Person.call(this, first, last, age, gender, interests) // O call permite chamar uma função definida em outro lugar mas no contexto atual com parametro.

    this.subject = subject
}

function Brick() {
    this.width = 10
    this.height = 20
}

function BlueGlasssBrick(){
    Brick.call(this)

    this.opacity = 0.5
    this.color = 'blue'
}

Teacher.prototype = Object.create(Person.prototype) // Aqui faz com que o Teacher seja um objeto novo, cuja cadeia de prototipos aponta para person, mas os metodos são de Person, por isso abaixo preciso trazer os metodos para ele

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false,
    writable: true,
}) // Usei essa parte para que o Teacher aponte para o Person, mas não faça referencia direta a ele, mas mostre como se fosse a copia e refenciando o Teacher


/*
-----Sobre HERANÇA------
    Existe a classe de objeto pai, a partir dela eu faço tanto as instancias que são criadas com o new
    As instancias acessam o protótipo do pai, ou seja não cria nada novo.

    Existe a possibilidade de criar um filho que vai herdar as propriedades e metodos do pai. A diferença dele para a instancia é que melhor para ter independencia
    se der algum erro no pai, não vai passar o bug para o filho, é como criar uma cópia.

    Para criar um filho com as propriedades do pai, basta usar o call(this), já para usar os metodos(funções) é de uma forma diferente usando prototype
*/

Teacher.prototype.greeting = function (){
    let prefix

    if(
        this.gender === 'male' ||
        this.gender === 'Male' ||
        this.gender === 'm' ||
        this.gender === 'M'
    ){
        prefix = 'Mr.'
    }else if(
        this.gender === 'female' ||
        this.gender  === 'Female' ||
        this.gender === 'f' ||
        this.gender === 'F'
    ){
        prefix = 'Mrs.'
    }else {
        prefix = 'Mx.'
    }

    alert(
        'Hello. My name is' + prefix + ' ' +
        this.name.last + 
        ', and I teach ' +
        this.subject + '.'
    )
}

let teacher1 = new Teacher('Primeiro', 'Silva', 30, 'F', ['music'], 'Math')




function Student(first, last, age, gender, interests ){
    Person.call(this, first, last, age, gender, interests)
}

Student.prototype = Object.create(Person.prototype)

Object.defineProperty(Student.prototype, 'constructor', {
    value: Student,
    enumerable: false,
    writable: true,
})

Student.prototype.greeting = function() {
    let typePron

    if(
        this.gender === 'Male' ||
        this.gender === 'male' ||
        this.gender === 'M' ||
        this.gender === 'm'
    ){
        typePron = 'Man'
    }else if(
        this.gender === 'female' ||
        this.gender === 'Female' ||
        this.gender === 'F' ||
        this.gender === 'f'
    ){
        typePron = 'Senhorita'
    } else {
        typePron = 'Lá ele'
    }
    alert('Yo! I\'m' + typePron + ' ' +
        this.name.last + ' ' + this.name.first + '.' )
}

let student1 = new Student('Larissa ', 'Sarmento ', 25, 'f', ['Neurociencia'])


//--------------- Forma mais moderna resumida de fazer classe e herança

class ModernPerson {
    constructor(first, last, age, gender, interests){
        this.name = {
            first,
            last,
        }
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    greeting(){
        console.log(`Hi! Saudação! I\'m' ${this.name.first}`)
    }

    farewell(){
        console.log(`${this.name.first} has left the building. Bye for now!`)
    }
}

let han = new ModernPerson('Han', 'Solo', 25, 'm', ['interesse1'])
han.greeting()

let leia = new ModernPerson('Leia', 'Organa', 36, 'famale', ['interesse2'])
leia.farewell()


class MordernTeacher extends ModernPerson {
    constructor(first, last, age, gender, insterests, subject, grade){
        super(first, last, age, gender, insterests)
    

    this.subject = subject
    this.grade = grade
}
}

let snape = new MordernTeacher('Professor', 'Sobrenome Teacher', 58, 'male', ['Potions'], 'Dark arts', 5)
snape.greeting()
snape.farewell()
snape.age
snape.subject