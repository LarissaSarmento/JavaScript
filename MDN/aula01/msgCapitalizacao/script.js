let list = document.querySelector('.output')
list.innerHTML = ''

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL']
for (let i = 0; i < cities.length; i++){
    let input = cities[i]
    let minusculas = input.toLowerCase()
 //   let primeiraLetra = minusculas.slice(0, 1)

    // let deixarMaiuscula = minusculas.replace(primeiraLetra, primeiraLetra.toUpperCase())

    let deixarMaiuscula = minusculas[0].toUpperCase() + minusculas.slice(1)

    // console.log(deixarMaiuscula)

    let result = deixarMaiuscula
    let listItem = document.createElement('li')
    listItem.innerHTML += `${result} <br>`
    list.appendChild(listItem)
}

// slice --  Cria uma cópia de parte da string, slice(inicio, fim)
// replace -- Substitui uma ocorrencia pela outra
// indexOf -- Retorna o indice da primeira ocorrencia, se não encontrar retorna -1