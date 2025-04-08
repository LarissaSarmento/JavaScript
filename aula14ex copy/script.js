function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var anoN = document.querySelector('#anoN')
    var res = document.querySelector('#msg')

    if (anoN.value.length == 0 || Number(anoN.value) > ano) {
        window.alert('[ERRO] informação inválida')
    }else{
        var formSex = document.getElementsByName('formSex')
        var idade = ano - Number(anoN.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSex[0].checked){
            genero = 'Homem'
         if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/pexels-bess-hamiti-83687-35537.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'imagens/pexels-sebastiaan9977-1304647.jpg')
        }else if (idade < 50){
            img.setAttribute('src', 'imagens/pexels-casnafu-31530118.jpg')
        }else{
            img.setAttribute('src', 'imagens/pexels-hasanalbari-1652340.jpg')
        }

         } else if(formSex[1].checked){
            genero = 'Mulher'
          if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/pexels-nappy-1068205.jpg')
         } else if(idade < 21){
            img.setAttribute('src','imagens/pexels-pixabay-264614.jpg')
         }else if (idade < 50){
            img.setAttribute('src','imagens/pexels-joni-musi-391114634-31497416.jpg')
         } else {
            img.setAttribute('src', 'imagens/pexels-olly-3768117.jpg')
         }
        }
        
    res.innerHTML= `Detectamos ${genero} com idade ${idade}`
    res.appendChild(img)
}
}