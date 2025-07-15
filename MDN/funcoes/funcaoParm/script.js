let btn = document.querySelector('button')
btn.onclick = function () {
  displayMessage('Your inbox is almost full - delete some mails', 'chat')
} // Aqui se usar os () vai chamar a função imediatamente


function displayMessage(msgText, msgType){
  let html = document.querySelector('body')

  let panel = document.createElement('div')
  panel.setAttribute('class', 'msgBox')
  html.appendChild(panel)

  var msg = document.createElement("p");
  msg.textContent = msgText
  panel.appendChild(msg);

  let closeBtn = document.createElement('button')
  closeBtn.textContent = 'x'
  panel.appendChild(closeBtn)

  closeBtn.onclick = function (){
    panel.parentNode.removeChild(panel)
  }
  
if (msgType === 'warning'){
  msg.style.backgroundImage = 'url(icones/warning.png)'
  panel.style.backgroundColor = 'red'
} else if (msgType = 'chat'){
  msg.style.backgroundImage = 'url(icones/chat.png)'
  panel.style.backgroundColor = 'aqua'
}else {
  msg.style.paddingLeft = '20px'
}
}
