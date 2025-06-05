let select = document.querySelector('select')
let html = document.querySelector('html')

// document.body.style.padding = '10px'

function update(bgColor, textColor){
    html.style.background = bgColor
    html.style.color = textColor
}

select.onchange = function(){
    select.value === 'black'
    ?update('black', 'white')
    :update('white', 'black')
}
