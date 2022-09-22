// Como unir 2 listas .concat(lista2)
const lista1 = ["Hola", 2, false, null]
const lista2 = ["Adios", 5, true, undefined]

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2)
console.log(lista3);

// Como unir 2 listas con el factor de propagacion
console.log(...lista3)

const lista4 = [...lista1,...lista2]
console.log(lista4);

