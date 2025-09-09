function soma(n1:number=0,n2:number=0):number{ // POsso adicionar valor padrão e omitir na chamada da função, deful
    return n1 + n2
}
console.log(soma(5))

//Poss também tornar um parametro opcional, para indicar que é opcional eu coloco um interrogação na frete dele, posso usar ou não na chamada da função

function novoUser(user:string,pass:string,nome?:string):void{
    let dados={user, pass, nome}

    console.log(dados)
    
    // console.log(`User:${user}`)
    // console.log(`Pass:${pass}`)
    // console.log(`NOme:${nome}`)
}
novoUser('br','125') 