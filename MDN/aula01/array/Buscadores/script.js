let list = document.querySelector('.output')
let searchInput = document.querySelector('#sinput')
let searchBtn = document.querySelector('#sbutton')

list.innerHTML = ''

let myHistory = []

searchBtn.onclick = function() {
    //
    if(searchInput.value !== ''){
        //number 1
        myHistory.push(searchInput.value)

        //
        //
        list.innerHTML = ''
        // 

        for(let i = 0; i < myHistory.length; i++){
            itemText = myHistory[i]
            let listItem = document.createElement('li')
            listItem.textContent = itemText
            list.appendChild(listItem)
        }

        //

        if (myHistory.length >= 5){
            //number 2
            myHistory.pop()
        }

        //
        searchInput.value = ''
        searchInput.focus()
    }
}