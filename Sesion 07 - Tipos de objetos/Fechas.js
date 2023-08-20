// trabajando con fechas
const fecha = new Date( )

console.log(fecha)

const fecha2 = new Date(1987,10,20,1,23,52,192)
console.log(fecha2)

const fecha3 = new Date(-10000000000000)
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987,10,20,1,23,52,192)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR, no se puede comparar fechar de esta manera

console.log(fecha2.getTime() === fecha5.getTime())// OK, esta es la forma de comparar fechas

// Obtener el dia, mes y año de una fecha
// obtener dia .getDate()
console.log(fecha2.getDate())

// obtener mes .getMonth()
console.log(fecha2.getMonth() + 1)

// obtener año .getFullYear()
console.log(fecha2.getFullYear())


// MOSTRAR FECHA EN STRING
console.log(fecha2.toLocaleDateString())









