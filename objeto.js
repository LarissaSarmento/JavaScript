let amigo = {nome: 'Larissa', 
sexo: 'F',
peso: 53,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)