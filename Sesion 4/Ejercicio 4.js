let nombre = "Alexander"
let apellido = "Portocarrero"

let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let estudianteLenght = estudiante.length

let firstNombre = nombre[0]
let lastApellido = apellido[apellido.length-1]

let estudianteNoSpace = estudiante.replace(/ /g,"")

let boolNombre = estudiante.includes(`${nombre}`)

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteLenght);
console.log(firstNombre);
console.log(lastApellido);
console.log(estudianteNoSpace);
console.log(boolNombre);