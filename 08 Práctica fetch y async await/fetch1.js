const boton = document.querySelector('button')
const personaje = document.getElementById('resultado')

const link = 'https://rickandmortyapi.com/api/character/1'

async function hacerFetch() {
    try {
        personaje.textContent = 'Cargando...'
        const response = await fetch(link)

        if (!response.ok) {
            throw new Error('Error HTTP: ' + response.status)
        }
        
        const datos = await response.json()
        personaje.textContent = `Nombre: ${datos.name}
        Estado: ${datos.status}
        Especie: ${datos.species}`

    } catch (error) {
        personaje.textContent = 'Error al cargar los datos'
    }
}
    
boton.addEventListener('click', hacerFetch)