const miFuncion = val => {
    if(typeof val === "number") {
        return val * 2
    }
    //return false
    throw new Error("El valor debe ser de tipo numerico")
}

//const elDoble = miFuncion("ala")
const numero = "9s"

try{
    // Codigo que puede fallar
    console.log("Esta ejecutandose de forma correcta")
    const doble = miFuncion(numero)
    console.log(doble)

} catch(e) {
    // En caso de fallar, quiero q ejecute...
    console.error("ERROR!")
    console.error(e)
    
} finally {
    console.log("Esto se va a ejecutar asi haya error o no")
}


// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
