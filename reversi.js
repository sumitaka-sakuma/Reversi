let currentColor = 'black'

window.onload = () => {


    const rows = Array.from({length: 8}, (v,k) => k+1)
    const columns = Array.from({length: 8}, (v,k) => k+1)

    for(row of rows){
        for(column of columns){
            document.querySelector('.grid-container').insertAdjacentHTML(
                'beforeend',
                `<div class="grid-item" data-row ="${row}" data-column="${column}"></div>`
            )
        }
    }

    Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
        element.addEventListener('click', (event) => {
            event.target.dataset.color = currentColor
            currentColor = enemyColor()
        })
    })
}

const enemyColor = () => {
    if(currentColor == 'black'){
        return 'white'
    }else{
        return 'black'
    }
}