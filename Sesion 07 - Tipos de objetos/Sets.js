// Sets o conjuntos
const array = [1,2,3,4,5,6,2,1,"Hola", {id:5}, {id:5}, "Hola"]

const miSet = new Set(array)

console.log(array);
console.log(miSet);

// .add()

miSet.add(9)
console.log(miSet);
miSet.add(4)
console.log(miSet);

// .delete()

miSet.delete("Hola")
console.log(miSet);

// .clear()
// miSet.clear(miSet)
// console.log(miSet);  // Set { }

// .has()
console.log(miSet.has(3)); // true

// .size
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor);
})

const it_miSet = miSet.values()
console.log(it_miSet.next().value);



const ar_miSet = [...miSet]
console.log(ar_miSet);












