// Trabajando con Objetos
const obj = {
    id:4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop]);

const obj2 = obj
console.log(obj2);

obj2.nombre = "Pancracio"
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4
let val2 = val1

val2= 6
console.log(val1);
console.log(val2);

/////////
const obj3 = {...obj}
console.log(obj3.nombre,obj.nombre)

obj3.nombre = "Anacleto"
console.log(obj3.nombre,obj.nombre)

////////////////
// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anio:1929},
    {titulo: "Titanic", anio:1997},
    {titulo: "Mohana", anio:2016},
    {titulo: "El efecto mariposa", anio:2004},
    {titulo: "TED", anio:2012},
]

console.log(listaPeliculas);

// .sort()  - MUTA EL VALOR 

listaPeliculas.sort((a,b) => a.anio - b.anio)
console.log(listaPeliculas);


















