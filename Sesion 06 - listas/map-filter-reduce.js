//Trabajar con metodos mas avanzados
// .map()  .filter()  .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Bilbao"]

const val = array.forEach(v => {
    console.log(v);
});
console.log(val)

const newArray = array.map((valor,indice) =>`${indice+1} - ${valor}`)
console.log(newArray)

const listaObjetos = [
    {nombre: "Leire", edad:25},
    {nombre: "Gloria", edad:45},
    {nombre: "Manuel", edad:75},
    {nombre: "Anna", edad:60},
    {nombre: "Arturo", edad:3}
]
// const personasMayores = listaObjetos.filter(obj =>{
//     if(obj.edad > 30){
//         return true
//     }else{
//         return false
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad>30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Manuel")
console.log(nuevaLista);


const valores = [3,56,23,5,90,100]
const sumatoria = valores.reduce((valAnterior, valActual, indexActual, arrayOriginal)=> {
    console.log(valAnterior);
    console.log(valActual);
    console.log(indexActual);
    console.log(arrayOriginal);
    return valAnterior + valActual
})
console.log(sumatoria)
















