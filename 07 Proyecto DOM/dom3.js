const form = document.querySelector('form')
const mensaje = document.querySelector('p')
const inputs = document.querySelectorAll('input')

function validarContenido() {
    const todosCompletos = Array.from(inputs).every(input => input.value)
    
    if (todosCompletos) {
        mensaje.textContent = "Formulario enviado correctamente"
        mensaje.style.color = 'green'
        inputs.forEach(input => input.value = '')
    } else {
        mensaje.textContent = "Por favor completa todos los campos"
        mensaje.style.color = 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validarContenido()
})