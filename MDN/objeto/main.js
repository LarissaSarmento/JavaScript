let pessoa = {
    nome: {
        primeiro:'Bob', 
        segundo: 'Smith'
    },
    idade: 32,
    sexo: 'masculino',
    interesse: ['musica', 'esquiar'],
    bio: function () {
        alert(
        this.nome[0] + 
        ' ' + 
        this.nome[1] + 
        ' tem ' + 
        this.idade + 
        ' anos de idade. Ele gosta de ' + 
        this.interesses[0] + 
        ' e ' + 
        this.interesses[1] + 
        '.',
    )
    },
    saudacao: function () {
        alert('Oi! eu sou' + this.nome[0] + '.')
    }
}

let myDataName = 'altura'
let myDataValue = '1.75m'
pessoa[myDataName] = myDataValue



/*
Notação com ponto
    - obj{nome = 'teste'
    obj.nome = 32}

    Nome aqui será 32


Notação com colchetes
    - obj{nome = 'teste'
    obj[nome] = 32}

    teste = 32, aqui o valor se torna uma variável e é usado no caso onde notação de ponto não atende
    quando tem espaço, ífem, numeros com letras por ex:

    obj{nome = 'teste sistema'
    obj.[nome] = 85}
    ou seja nome é teste sistema = 85
    


Notação com nome computado
    -   Notação com nome computado é como criar um objeto e poder usar tanto notação de ponto quanto colchetes para ver o resultado 
    let nome = 'teste'
    let nomeAlterado = {
    [nome]: 'teste02'}

    reultado será nomeAlterado[nome]


*/


///////////////// Usando THIS /////////////////

/*

O THIS se adapta ao objeto que chama a função, por ex:

Eu uso o this em um objeto dentro de uma função,
nisso posso utilizar a mesma função em outro objeto, que ele vai trazer as informações do objeto atual

*/