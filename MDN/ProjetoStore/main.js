const produtos = [{nome: 'CanecaPinkFloyd', preco: 200.00, imagem: 'image/canecaPinkFloyd.webp'},
    {nome:'CamisaPinkFloyd', preco: 500.00, imagem: 'image/camisaPinkFloyd.webp'}
]

produtos.forEach(prod =>{
    const div = document.createElement('div')
    div.className = 'produto'
    div.innerHTML = `<img src="${prod.imagem}">
    <h3>${prod.nome}<h3>
    <p>R$ ${prod.preco}</p>
    <button id="adicionar" data-preco="${prod.preco}">Adicionar ao Carrinho</button>`

    document.querySelector('#produtos').appendChild(div)
})

const carrinho = document.querySelector('#carrinho')
const modal = document.querySelector('#modal')
const fechar = document.querySelector('#fechar-modal')
const hidden = document.querySelector('.hidden')

carrinho.addEventListener('click', ()=>{
    modal.style.display = 'flex'
})

fechar.addEventListener('click', () =>{
    modal.style.display = 'none'
})

let botoes = document.querySelectorAll('#adicionar')
let res = document.querySelector('#res')
let total = 0
botoes.forEach(botao =>{
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

