import { suma, eleva, nombre } from './modulos/matematicas.js'
//import * as moduloMatematicas from './modulos/matematicas.js'

import getAutor , { libro } from './modulos/literatura.js'

//const sum = moduloMatematicas.suma(4,12)
const sum = suma(4,12)

console.log(sum)

const potencia = eleva(2, 21)

console.log(potencia)

console.log(nombre)

console.log(getAutor())
console.log(libro)


