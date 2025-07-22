const produtos = [{nome: 'Caneca PinkFloyd', preco: 200.00, imagem: 'image/canecaPinkFloyd.webp'},
    {nome:'Camisa PinkFloyd', preco: 500.00, imagem: 'image/camisaPinkFloyd.webp'}
]

produtos.forEach(prod =>{
    const div = document.createElement('div')
    div.classList.add('produto') //

    div.dataset.nome = prod.nome
    div.dataset.preco = prod.preco

    div.innerHTML = `<img src="${prod.imagem}">
    <h3>${prod.nome}<h3>
    <p class="preco">R$ ${prod.preco.toFixed(2)}</p>
    <button class="addCar">Adicionar ao Carrinho</button>`

    document.querySelector('#produtos').appendChild(div)
})

let res = document.querySelector('#res')
let tot = document.querySelector('#total')
let total = 0 // O total é passado fora do clique para o total já começar com zero, se não vai começar dentro como zero e somar zero + produto, sempre vai dar o valor do produto sem acumular.

// Soma no carrinho
document.querySelector('#produtos').addEventListener('click', (e) =>{
    const produto = e.target.closest('.produto')
    if(!produto) return

    msgAlert('Produto adicionado ao carrinho!')

    const nome = produto.dataset.nome
    const precoItem = parseFloat(produto.dataset.preco)
    total += precoItem

    res.innerHTML += `Produto selecionado: ${nome} - R$ ${precoItem.toFixed(2)} <br>`
    tot.innerHTML = `<br> Total: ${total.toFixed(2)}`
})

// abrir carrinho e fechar
const carrinho = document.querySelector('#carrinho')
const modal = document.querySelector('#modal')
const fechar = document.querySelector('#fechar-modal')
// const hidden = document.querySelector('.hidden')

carrinho.addEventListener('click', ()=>{
    modal.style.display = 'flex'
})

fechar.addEventListener('click', () =>{
    modal.style.display = 'none'
})

const modalContent = document.querySelector('.modal-content')

    let limparCarrinho = document.createElement('button')
    limparCarrinho.setAttribute('id', 'limparCar')
    limparCarrinho.innerHTML = 'Limpar'
    limparCarrinho.style.display = 'flex'
    limparCarrinho.style.marginTop = '10px'
    modalContent.appendChild(limparCarrinho)

    limparCarrinho.addEventListener('click', ()=>{
        msgAlert('Carrinho limpo!')
        res.textContent = ''
        tot.textContent = ''
        total = 0
    })


    function msgAlert(msg){
        window.alert(msg)
    }


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

