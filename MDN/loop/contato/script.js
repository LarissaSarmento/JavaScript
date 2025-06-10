let contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
]

let para = document.querySelector('p')
let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
  let nome = input.value
  input.value = ''
  input.focus()

  for(let i = 0; i < contacts.length; i++){
    let separador = contacts[i].split(':')
    if(separador[0] === nome){
      para.textContent = `${separador[0]} : ${separador[1]}`
      break
    }else{
      para.textContent = `Nome não encontrado`
    }
  }
})

