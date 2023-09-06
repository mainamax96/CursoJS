class Persona {

    constructor( nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
}

const nueva_persona = new Persona("Karina", 56, true)

console.log(nueva_persona)

nueva_persona.saludo()

let numero = 60 // esto es inicializar una variable
console.log(typeof numero)
let persona_2 = new Persona("nombrecito", 33, false) // esto es instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// OPERADOR: instanceof -> silimar a typeof pero para clases





