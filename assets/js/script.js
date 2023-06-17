let price = 27500

let quantity = document.querySelector('#quantitySelector')
let colorSelector = document.querySelector('#colorSelector')

let button = document.querySelector('#getTotal')

button.addEventListener('click', () => {
    document.querySelector('#totalPrice').innerHTML = (quantity.value * price).toLocaleString()
    document.querySelector('#quantity').innerHTML = quantity.value
    document.querySelector('#colorUser').style.backgroundColor = colorSelector.value
})

let trashCan = document.querySelector('#trashCan')

trashCan.addEventListener('click', () => {
    document.querySelector('#totalPrice').innerHTML = 0
    document.querySelector('#quantity').innerHTML = 0
    document.querySelector('#quantitySelector').value = ''
    document.querySelector('#colorSelector').value = ''
    document.querySelector('#colorUser').style.backgroundColor = ''
})