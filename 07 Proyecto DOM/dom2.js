const caja = document.querySelector('div')
const boton = document.querySelector('button')

boton.addEventListener('click', function() {
    caja.classList.toggle('activo')
    if (boton.textContent === 'Activar') {
        boton.textContent = 'Desactivar'
    } else {
        boton.textContent = 'Activar'
    }
})