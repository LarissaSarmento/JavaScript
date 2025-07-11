const produtos = [{nome: 'CanecaPinkFloyd', preco: 200.00, imagem: 'image/canecaPinkFloyd.webp'},
    {nome:'CamisaPinkFloyd', preco: 500.00, imagem: 'image/camisaPinkFloyd.webp'}
]

produtos.forEach(prod =>{
    const div = document.createElement('div')
    div.className = 'produto'
    div.innerHTML = `<img src="${prod.imagem}">
    <h3>${prod.nome}<h3>
    <p>R$ ${prod.preco}</p>
    <button id="adicionar">Adicionar ao Carrinho</button>`

    document.body.appendChild(div)
})

let carrinho = document.querySelector('#carrinho')
let adicionar = document.querySelectorAll('#adicionar')
let res = document.querySelector('#res')
let total = 0

adicionar.forEach(botao =>{
    botao.addEventListener('click', (e) =>{
        let preco = parseFloat(e.target.dataset.preco)
        total += preco
        res.textContent = `Total: ${total.toFixed(2)}`
    })
})


// function adicionar(){
//     if()
// }

// carrinho.addEventListener('click', ()=>{
// })