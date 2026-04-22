const input = document.querySelector('input')
const lista = document.querySelector('ul')
const elementosLista = document.querySelectorAll('li')

input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase()

    elementosLista.forEach(elemento => {
        elemento.textContent.toLowerCase().includes(query) ? elemento.style.display = '' : elemento.style.display = 'none'
    })
})