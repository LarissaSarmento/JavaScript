let output = document.querySelector('.output')
// output.innerHTML = ''


for(let i = 10; i >= 0; i--){
  let para = document.createElement('p')
  para.textContent = i
  output.appendChild(para)
}


