function carregar() {
    var msg =  window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if ((hora > 0) && (hora < 12)){
        msg.innerHTML= `Agora são ${hora} horas! Bom dia!!`
        img.src = 'imagens/pexels-gareth-davies-230510-910411.jpg'
        document.body.style.background = '#e2cd9f'
    }else if ((hora > 12) && (hora < 18)){
        msg.innerHTML = `Agora são ${hora} horas! Boa tarde!!`
        img.src = 'imagens/pexels-anderson-martinsz-2386144.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas! Boa noite!!`
        img.src =  'imagens/pexels-pedro-figueras-202443-681467 (1).jpg'
        document.body.style.background = '#515154'
    }
       
}
