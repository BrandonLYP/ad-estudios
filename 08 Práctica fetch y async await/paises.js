const boton = document.querySelector('button')
const resultado = document.getElementById('resultado')
const input = document.querySelector('input')

const buscarPais = async() => {
    try {
        resultado.innerHTML = ''
        resultado.textContent = 'Cargando...'

        const pais = input.value
        const response = await fetch(`https://restcountries.com/v3.1/name/${pais}`)

        if (!response.ok) {
            throw new Error('Error HTTP: ' + response.status)
        }

        const data = await response.json()

        resultado.innerHTML = ''

        const lista = document.createElement('ul')
        resultado.appendChild(lista)

        const bandera = document.createElement('img')
        bandera.setAttribute('src', data[0].flags.png)
        bandera.setAttribute('alt', data[0].flags.alt)
        resultado.appendChild(bandera)

        const nombre = document.createElement('li')
        nombre.textContent = `País: ${data[0].name.common}`
        lista.appendChild(nombre)

        const capital = document.createElement('li')
        capital.textContent = `Capital: ${data[0].capital}`
        lista.appendChild(capital)

        const poblacion = document.createElement('li')
        poblacion.textContent = `Población: ${data[0].population}`
        lista.appendChild(poblacion)

        const region = document.createElement('li')
        region.textContent = `Región: ${data[0].region}`
        lista.appendChild(region)

    } catch (error) {
        resultado.textContent = 'País no encontrado'
    }
    
} 

boton.addEventListener('click', () => {
    if (input.value) {
        buscarPais()
    } else {
        resultado.innerHTML = ''
    }
})