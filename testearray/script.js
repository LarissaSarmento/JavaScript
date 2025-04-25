function array() {
    let resnomes = document.querySelector('#resnomes')
    let resletras = document.querySelector('#resletras')

    frutas = ['morango', 'uva', 'banana', 'coco']

   for(let i = 0; i < frutas.length; i++){
        resnomes.innerHTML += ` ${frutas[i]}`
        resletras.innerHTML += `${frutas[i].length}`
   }
}

function arrayy() {
    
}