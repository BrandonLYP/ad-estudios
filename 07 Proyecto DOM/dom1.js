const textoTitulo = document.querySelector('h1')
const textoParrafo = document.querySelector('p')
const boton = document.getElementById('button-change')

boton.addEventListener('click', () => {
    textoTitulo.textContent = "Texto cambiado"
    textoParrafo.textContent = "Párrafo actualizado"
})