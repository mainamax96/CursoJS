//Trabajando con objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

// al igualar directamente objetos ambos apuntan al mismo espacio de memoria
const obj2 = obj
console.log(obj2)

obj2.nombre = "Karina"
obj2.apellido = "Pino"

console.log(obj2.nombre)
console.log(obj.nombre)

const obj3 = {...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Venusariana"

console.log(obj.nombre)
console.log(obj3.nombre)

//////////////////////////
// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    { titulo: "Beowulf", anio: 2001 },
    { titulo: "titanic", anio: 1997 },
    { titulo: "Mohana", anio: 2016 },
    { titulo: "Shrek", anio: 2000 },
    { titulo: "Ted", anio: 2012 },
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b) => a.anio - b.anio)

console.log(listaPeliculas)











