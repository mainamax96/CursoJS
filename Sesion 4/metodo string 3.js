//metodos de cadenas de texto p3
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/los/g));

//Verificar existencia de palabra en texto
console.log(texto_largo.includes("prefiere"));

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("árboles."));
