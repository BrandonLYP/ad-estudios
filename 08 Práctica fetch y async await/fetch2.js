const boton = document.querySelector('button')
const input = document.querySelector('input')
const resultados = document.getElementById('resultados')

const busqueda = async() => {
    try {
        resultados.innerHTML = ''
        resultados.textContent = 'Cargando...'

        const nombrePersonaje = input.value
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`)

        if (!response.ok) {
            throw new Error('Error HTTP: ' + response.status)
        }
        const data = await response.json()

        resultados.innerHTML = ''

        const lista = document.createElement('ul')
        resultados.appendChild(lista)

        data.results.forEach(personaje => {
            const li = document.createElement('li')
            li.textContent = `Nombre: ${personaje.name}
            Estado: ${personaje.status}
            Especie: ${personaje.species}`
            lista.appendChild(li)
        })
    }
    
    catch (error) {
        resultados.textContent = 'No se encontraron personajes'
    }
}

boton.addEventListener('click', () => {
    if (input.value) {
        busqueda()
    } else {
        resultados.innerHTML = ''
    }
})