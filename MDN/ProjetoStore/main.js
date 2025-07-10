const produtos = [{nome: 'CanecaPinkFloyd', preco: 200.00, imagem: 'image/canecaPinkFloyd.webp'},
    {nome:'CamisaPinkFloyd', preco: 500.00, imagem: 'image/camisaPinkFloyd.webp'}
]

produtos.forEach(prod =>{
    const div = document.createElement('div')
    div.className = 'produto'
    div.innerHTML = `<img src="${prod.imagem}">
    <h2>${prod.nome}<h2>
    <p>R$ ${prod.preco}</p>
    <button>Adicionar ao Carrinho</button>`

    document.body.appendChild(div)
})