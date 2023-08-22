// Funciones asincronas

function miAsync(){
     // hace una llamada a una BD externa
     // puede darnos algun error

}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2)
    console.log(`Numero: ${i}`)
    //si esta todo correcto
    if(i !== 0) {
        resolve()
    } else {
        reject()
    }

})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre pe"))

