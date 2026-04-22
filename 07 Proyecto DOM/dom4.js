const boton = document.querySelector('button')
const lista = document.querySelector('ul')
const input = document.querySelector('input')

function agregarItem() {
    if (input.value) {
        let nuevoItem = document.createElement('li')
        let botonEliminar = document.createElement('button')
        botonEliminar.textContent = 'Eliminar'
        nuevoItem.textContent = input.value
        nuevoItem.appendChild(botonEliminar)
        lista.appendChild(nuevoItem)
        botonEliminar.addEventListener('click', eliminarItem)
        input.value = ''
    }
}

function eliminarItem(e) {
    let item = e.target.parentNode
    item.remove()
}

boton.addEventListener('click', agregarItem)