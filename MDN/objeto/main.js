let pessoa = {
    nome: ['Bob', 'Smith'],
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
