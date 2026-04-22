const boton = document.getElementById('boton-color')
let p = document.getElementById('color')
const fondo = document.body

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorHex += digitos[indiceAleatorio]
    }

    return colorHex
}

boton.addEventListener('click', () => {
    p.innerText = generarColorHexAleatorio()
    fondo.style.backgroundColor = p.innerText
})