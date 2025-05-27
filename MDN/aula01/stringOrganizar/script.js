let list = document.querySelector('.output')
// list.innerHTML = ''

let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield']

for (let i = 0; i< stations.length; i++){
    let input = stations[i]
    
    let tresLetras = input.slice(0, 3)
    var estados = input.indexOf(';')
    var juntar = input.slice(estados + 1)
    
   // let estados = input.split(';') // Divide a string em duas partes.
    //let juntar = tresLetras + ': ' + estados[1]



     console.log(juntar)
    let result = tresLetras + ': ' + juntar
   // let result = juntar
    let listItem = document.createElement('li')
    listItem.textContent = result
    list.appendChild(listItem)
}