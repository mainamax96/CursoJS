// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Alexander",
    apellido: "Portocarrero",
    edad: 25,
    altura: 180,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datos.edad
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaAmigos = [
    datos,
    {
    nombre: "Anderson",
    apellido: "Huaman",
    edad: 22,
    altura: 175,
    eresDesarrollador: false
    },
    {
    nombre: "Christian",
    apellido: "Lucano",
    edad: 24,
    altura: 174,
    eresDesarrollador: true
    }
]
console.log(listaAmigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaAmigosOrdenada = listaAmigos
listaAmigosOrdenada.sort((a,b) => b.edad - a.edad)
console.log(listaAmigosOrdenada);