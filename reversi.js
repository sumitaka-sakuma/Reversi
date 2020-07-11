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

            const row =  event.target.dataset.row
            const column = event.target.dataset.column

            squares = getUpLine(row, column)

            squaresToBeReversed = getTarget(squares)

            squaresToBeReversed.forEach(el => {el.dataset.color = currentColor})

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

/**
 * @params {integer} row
 * @params {integer} column
 * @return {array}
 */
const getUpLine = (row, column) => {

    result = []
    for(i = row - 1; i>0; i--){
        result.push(document.querySelector(`[data-row="${i}"][data-column="${column}"]`))
    }
    return result
}

const getTarget = (squares) => {

    result = []

    for(const square of squares){

        const color = square.dataset.color 

        if(color == enemyColor()){
            result.push(square)
        }else if(color == currentColor){
            return result
        }else{
            return []
        }
    }
    return []
}