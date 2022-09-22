// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Pan", "Leche", "Huevos", "Sal", "Jamon"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop("Aceite de Girasol")
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    {titulo:"Beowulf", director:"Robert Zemeckis", fecha:new Date("november 16 2007")},
    {titulo:"Gonjiam: hospital maldito", director:"Beom-sik Jeong", fecha:new Date("march 28 2018")},
    {titulo:"Animales fantásticos y dónde encontrarlos", director:"David Yates", fecha:new Date("november 17 2016")}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const listaPeliculasPost = listaPeliculas.filter(p => p.fecha > new Date("january 1 2010"))
console.log(listaPeliculasPost);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirector = listaPeliculas.map(p => p.director)
console.log(listaDirector);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulo = listaPeliculas.map(p => p.titulo)
console.log(listaTitulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatListaDirTit = listaDirector.concat(listaTitulo)
console.log(concatListaDirTit);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propListaDirTit = [...listaDirector,...listaTitulo]
console.log(propListaDirTit);
