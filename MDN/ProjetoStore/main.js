const produtos = [{nome: 'CanecaPinkFloyd', preco: 200.00, imagem: 'image/canecaPinkFloyd.webp'},
    {nome:'CamisaPinkFloyd', preco: 500.00, imagem: 'image/camisaPinkFloyd.webp'}
]

produtos.forEach(prod =>{
    const div = document.createElement('div')
    div.className = 'produto'

    div.dataset.nome = prod.nome
    div.dataset.preco = prod.preco

    div.innerHTML = `<img src="${prod.imagem}">
    <h3>${prod.nome}<h3>
    <p class="preco">R$ ${prod.preco.toFixed(2)}</p>
    <button class="addCar">Adicionar ao Carrinho</button>`

    document.querySelector('#produtos').appendChild(div)
})

let res = document.querySelector('#res')
document.querySelector('#produtos').addEventListener('click', (e) =>{
    const produto = e.target.closest('.produto')
    if(!produto) return

    const nome = produto.dataset.nome
    const preco = parseFloat(produto.dataset.preco)

    res.textContent= `Produto selecionado :${nome} - R$ ${preco.toFixed(2)}`
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



// let botoes = document.querySelectorAll('#adicionar')
// let total = 0
// botoes.forEach(botao =>{
//     botao.addEventListener('click', (e) =>{
//         let preco = parseFloat(e.target.dataset.preco)
//         total += preco
//         res.textContent = `Total: ${total.toFixed(2)}`
//     })
// })


// function adicionar(){
//     if()
// }

// carrinho.addEventListener('click', ()=>{
// })

