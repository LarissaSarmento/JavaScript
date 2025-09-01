// Trabalhando com Objetos
let dados= {
    nome:"Larissa",
    idade:25,
    status:"A",
    ola:()=>{console.log('Oi')},
    info:(p:string)=>{console.log(p)}
}

dados.nome = "OutroNome"
console.log(dados['nome'])

dados.ola()
dados.info('Função com parametro, precisa tipar o parametro')
dados.info(dados.nome) // Também posso usar o proprio objeto no parametro