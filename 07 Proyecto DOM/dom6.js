const total = document.querySelector('p')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const reset = document.getElementById('reset')
let contador = 0

function actualizar() {
    total.textContent = contador
    total.style.color = contador > 0 ? 'green' : 'gray'
}

actualizar()

suma.addEventListener('click', () => {
    contador++
    actualizar()
})
resta.addEventListener('click', () => {
    if (contador > 0) {
        contador--
        actualizar()
    }
})
reset.addEventListener('click', () => {
    contador = 0
    actualizar()
})