// .some()
const array = [3,7,2,4,7,9,42,35,7865,23,-2]

const res = array.some(valor => valor<0)
console.log(res)

const existe = array.some(valor => valor === 9)
console.log(existe);

const listaObjetos = [
    {nombre: "Leire", edad:25},
    {nombre: "Gloria", edad:45},
    {nombre: "Manuel", edad:75},
    {nombre: "Anna", edad:60},
    {nombre: "Arturo", edad:3}
]

const existePersona = listaObjetos.some(persona => persona.nombre === "Manuel")
console.log(existePersona);

//como obtener una lista a partir de un objeto iterable
const str = "Hola soy Alexander"
console.log(str[1]);

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([1,2,"Hola", 58])
const ar_set = Array.from(set)
console.log(ar_set)

console.log(array);
const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);