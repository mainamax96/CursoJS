const persona = {
    nombre: "Karina",
    edad: 56,
    usDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Alexander",
    edad: 26,
    isDeveloper: false,
    saludo: function() {
        console.log('hola')
    }
}

otra_persona.saludo()

//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return{
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function() {
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Pino", 26, true)
console.log(nueva_persona_2.saludo)


