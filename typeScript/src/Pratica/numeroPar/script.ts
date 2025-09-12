let num = document.querySelector<HTMLInputElement>('#num')
let res = document.querySelector<HTMLParagraphElement>('#res')
let botao = document.querySelector<HTMLButtonElement>('#botao')


   let armazValor: number[]=[]
   const verificaNum = (n:number) =>{
        if(n === 0){
            res.textContent = `Digite um número válido`
        }else if(n % 2 === 0){
            res.textContent = `Número par`
        }else{
            res.textContent = `Número ímpar`
        }
    }

    botao.addEventListener('click',()=>{
        let valor = Number(num.value)
        armazValor.push(valor)
        verificaNum(valor)
    })

    