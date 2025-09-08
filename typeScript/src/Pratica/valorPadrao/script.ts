let teste = document.querySelector('#teste')

teste?.addEventListener('click',()=>{
    window.alert('test')
})

class Produtos {
    constructor(
        public nome: string,
        public preco: number,
        public img: string
    ){

    }
}

