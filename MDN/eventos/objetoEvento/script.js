let form = document.querySelector('form')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let submit = document.getElementById('submit')
let para = document.querySelector('p')

form.onsubmit = function (e){
  if (fname.value === '' || lname === ''){
    e.preventDefault()
    para.textContent = 'You need to fill in both names!'
  }
}
