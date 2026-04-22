/*
// 1
function parOImpar (x) {
    let residuo = x % 2
    return (residuo == 0 ? "par" : "impar")
}

// 2
function maximo(...args) {
    let nroMaximo = args[0]
    for (let i = 0; i < args.length; i++) {
        if (args[i] > nroMaximo) {
            nroMaximo = args[i]
        }
    }
    return nroMaximo
}

// 3
function contarVocales(palabra) {
    let vocales = ['a', 'e', 'i', 'o', 'u']
    const letras = palabra.toLowerCase().split("")
    
    const contador = letras.filter(elemento => vocales.includes(elemento)).length
    return contador
}

// 4
function invertir(inv) {
    const arr = inv.split("")
    let pop = 

    console.log(arr.join(""))
}

// 5
const sumar = arr => arr.reduce((a, b) => a + b, 0)
console.log(sumar([1,10,1]))
*/
// 6
function buscarPorId(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
            return arr[i]
        }
    }
    return null
}
const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Brandon", activo: false },
    { id: 3, nombre: "Carlos", activo: true }
]