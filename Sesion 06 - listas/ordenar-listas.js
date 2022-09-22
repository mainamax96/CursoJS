// .sort() - MODIFICA EL ARRAY
const array = [2,5,9,15,1,2,0,4]

console.log(array)

array.sort((a,b) => {
    if(a < b){
        return -1
    }else if(a>b){
        return +1
    }else{ //a === b
        return 0
    }
})

console.log(array);

//Ordenar UNICAMENTE arrays numericos
const arrayNumerico = [4,1,7,3,1,3,56,1,546]
arrayNumerico.sort((a,b) => a - b)
console.log(arrayNumerico)

//Array de objetos
const listaObjetos = [
    {nombre: "Leire", edad:25},
    {nombre: "Gloria", edad:45},
    {nombre: "Manuel", edad:75},
    {nombre: "Anna", edad:60},
    {nombre: "Arturo", edad:3}
]

// listaObjetos.sort((a,b) => {
//     if(a.edad < b.edad){
//         return -1
//     }else if(a.edad>b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })

listaObjetos.sort((a,b) => a.edad - b.edad)

console.log(listaObjetos);

















