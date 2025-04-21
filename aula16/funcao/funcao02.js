function soma(n1=0, n2=0){ // Colocar igual a zero porque se deixar sem ele é undefined, e nisso não retorna NaN caso a chamada seja vazia
    return n1 + n2
}

console.log(soma(2, 6))