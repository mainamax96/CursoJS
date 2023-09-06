class Persona {
    // Private -> #
    // Private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected -> _
    // Protected -> solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true

    constructor( nom , edad){
        this.#nombre = nom
        this.#edad = edad
    }

    
    saludo(){
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años`)
    }

    obtenNombre(){ // funcion getter -> nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }

    #obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Karina", 76)
// console.log(persona)
// console.log(persona.nombre)
persona.saludo()

// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())
// console.log(persona._isDeveloper)


// Getter -> métodos q nos permiten obtener atr/mets privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> métodos q nos permiten cambiar el valor de algunos atr privados o protegidos
persona.setEdad(86)
console.log(persona.getEdad())





