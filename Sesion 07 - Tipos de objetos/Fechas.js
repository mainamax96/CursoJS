// Trabajando con fechas
const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1997,10,10,23)
console.log(fecha2)

const fecha3 = new Date(1600000000000)
console.log(fecha3);

const fecha4 = new Date("October 13 1979 15:15:15")
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1997,10,10,23)

console.log(fecha2 === fecha5) // ERROR - no se pueden comprar fechas de este modo

console.log(fecha2.getTime() === fecha5.getTime()) // CORRECTO 

//// Obtener el dia, mes y año de una fecha
// Obtener Dia .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0-Enero , 11-Diciembre)
console.log(fecha2.getMonth()+1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());


console.log(fecha2);
// .toLocaleDateString
console.log(fecha2.toLocaleDateString("es-GB"));




