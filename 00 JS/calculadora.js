const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

function calcular(a, operador, b) {
    const operadores = ["+", "-", "*", "/"]
    for (let i = 0; i < operadores.length; i++) {
        if (operador === operadores[i]) {
            if (operador === "+") {
                return sumar(a, b)
            } else if (operador === "-") {
                return restar(a, b)
            } else if (operador === "*") {
                return multiplicar(a, b)
            } else if (operador === "/") {
                if (b === 0) {
                    return "No se puede dividir por cero"
                } else {
                    return dividir(a, b)
                }
            }
        }
    }
    return "Operador no válido"
}

console.log(calcular(155, "*", 4))