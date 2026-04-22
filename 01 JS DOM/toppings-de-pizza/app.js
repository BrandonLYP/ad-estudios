/*
// Acceder a un elemento por su id y asignarlo a una variable
const titulo = document.getElementById('titulo');
console.log(titulo.innerText)

// Acceder a varios elementos con la misma clase y mostrar 1 de ellos con algún atributo
const toppings = document.getElementsByClassName('topping')
console.log(toppings[0].id)

// Acceder a varios elementos con la misma etiqueta
const etiquetas = document.getElementsByTagName('li')
console.log(etiquetas)

// Acceder a queries tipo CSS (primer elemento que encuentre con los valores asignados)
const primerToppingNaranja = document.querySelector('.topping.fondo-naranja'); // También funcionan con id (#aceituna)
console.log(typeof primerToppingNaranja);

// Acceder a queries contrarios (!=)
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);

// Acceder a varios nodos a la vez
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja')
console.log(toppingsNaranja[0])
console.log(toppingsNaranja[1])

// Cambiar estilo a los elementos como CSS
const primerTopping = document.querySelector('.topping')
primerTopping.style.backgroundColor = 'blue'
primerTopping.style.color = '#6dff00'
primerTopping.style.textTransform = 'uppercase'

// (Acceder a la cadena de texto + indentación)
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings.textContent)

// Modificar texto del DOM
const titulo = document.getElementById('titulo')
titulo.innerText = 'Mis Toppings Favoritos'

// Acceder a atributos de elementos (Se pueden manipular con .removeAttribute(atributo) .setAttribute(atributo, nuevoValor))
const enlaces = document.getElementsByTagName('a')
console.log(enlaces[0].getAttribute('href'))

// Acceder a la lista de clases que contenga un elemento
const primerTopping = document.querySelector('.topping')
console.log(primerTopping.classList)

// Agregar una nueva clase a un elemento
const primerTopping = document.querySelector('.topping')
primerTopping.classList.add('mi-clase')
console.log(primerTopping.classList)

// Verificar que el elemento contenga una clase específica (retorna booleano)
const primerTopping = document.querySelector('.topping')
console.log(primerTopping.classList.contains('fondo-marron'))

// Eliminar clase a un elemento
const primerTopping = document.querySelector('.topping')
primerTopping.classList.remove('topping')
console.log(primerTopping.classList)

// Crear un nuevo elemento
const listaDeToppings = document.getElementById('lista-toppings') // Se busca dónde se va a agregar el elemento nuevo
const toppingNuevo = document.createElement('li') // Se crea el nuevo elemento de tipo li
toppingNuevo.classList.add('topping', 'fondo-marron') // Se le asignan las clases correspondientes
toppingNuevo.innerText = 'Queso Extra' // Se le asigna un texto
listaDeToppings.append(toppingNuevo) // Se agrega el nuevo elemento a la lista con .append

// Eliminar un elemento
toppingNuevo.remove() // Se elimina el elemento
listaDeToppings.remove() // Elimina la lista completa

// Agregar un elemento NO HTML
listaDeTopping.appendChild(toppingNuevo)

// Acceder al elemento Padre de un elemento (.parentElement o .parentNode)
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings.parentElement)

// Acceder al elemento Hijo de un elemento (.firstElementChild o .lastElementChild)
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings.children[0])

// Acceder al elemento Hermano de un elemento (.previousElementSibling o .nextElementSibling)
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings.previousElementSibling)

// !--> EVENTOS
// Click
const albahaca = document.getElementById('albahaca')

function mostrarClic(e) {
    console.log(e.target.innerText)
}

albahaca.addEventListener('click', mostrarClic)

// Iterar sobre todos los elementos del mismo className
const toppings = document.getElementsByClassName('topping')

function mostrarClic(e) {
    console.log(e.target.innerText)
}

for (const topping of toppings) {
    topping.addEventListener('click', mostrarClic)
}
*/
// Definir funciones pequeñas en flecha
const toppings = document.getElementsByClassName('topping')

for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
}