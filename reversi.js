console.log('hello')

window.onload = () => {

    Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
        element.addEventListener('click', (event) => {
            event.target.dataset.color = "white"
        })
    })
}