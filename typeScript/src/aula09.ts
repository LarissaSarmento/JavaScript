// Conceito de enumeradores, ENUMS

let dias= { // Aqui seria um objeto conforme a aula 08
    segunda:""
}

enum edias{
    domingo=0, // Por ser um enum ele entende esse valores como chave por isso dá para acessar daquela forma abaixo no console
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

console.log(edias.domingo)
console.log(edias["sexta"])
console.log(edias[2]) // Exibe a chave que está associada a este valor 2

const d= new Date()
console.log(d)
console.log(d.getDate()) // Busca o dia de hoje no caso dia 28 
console.log(d.getDay()) // Dia da semana, por padrão domingo começa como zero
console.log(edias[d.getDay()]) // Fez a relação do getDay com o enum

//------------

enum cores{
    branco="#fff",
    preto="#000",
    vermelho="#f00",
    verde="#of0",
    azul="#00f"
}

console.log(cores.branco)
console.log(cores['branco'])

enum  tipoUsuario{
    USER=10,
    ADMIN,
    SUPER
}

console.log(tipoUsuario.ADMIN)

const tp:tipoUsuario=tipoUsuario.SUPER
console.log(tp)