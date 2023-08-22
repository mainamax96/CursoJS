//funciones generadoras

function* generaId() {
    let id = 0
    while(true){
        id++
        if(id >= 10) {
            return id
        }
        console.log(`** ${id}`)
        yield id
        console.log(`** ${id}`)

        
    }
}

const gen = generaId()

console.log(gen)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
