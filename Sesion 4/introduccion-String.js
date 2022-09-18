//Strings
let string_sng = 'String con comillas simples'
let string_dbl = "Sring con comillas dobles"

console.log(string_sng);
console.log(string_dbl);

let str_comillas = "El otro dia me dijo \"ve a sacar la basura\""
let str_comillas_simples = 'El otro dia me dijo "ve a sacar la basura"'
let str_comillas_dobles = "El otro dia me dijo 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro dia me dijo \'ve a sacar la basura\''

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

////comillas invetidas (backticks)
let str_backticks = 'Hola esto es un string con backticks'

console.log(str_backticks);

let nombre = "Alexander"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo);

//Plantilla HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo </p>
</html>
`;

console.log(plantilla);

////Introduccion de variables en HTML
let libros = ["Libro 1", "Libro 2", "Libro 3"]