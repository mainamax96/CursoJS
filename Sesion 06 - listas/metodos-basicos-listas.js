// Como trabajar con listas (arrays, arreglos, vectores ...)
let var1 = 45
let array = [1, "Hola", false, {id:5}, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a travez de su posicion
// array[indice] => 0, 1, 2, 3, 4, 5,...
console.log(array[6]);
console.log(array[1]);
console.log(array[3]);

// Metodos para introducir nuevos valores en arrays
// .push() .unshift() - mutan el valor de nuestro array
// Valores al final -> PUSH
array.push("final",24)
console.log(array)
// Valores al principio -> UNSHIFT
array.unshift("inicio", 532)
console.log(array);

// Metodos para eliminar valores en nuestros array
// .pop() .shift() - Mutan el valor del array
// Valores al final -> POP
array.pop()
console.log(array)
// Valores al inicio -> SHIFT
array.shift()
console.log(array)

//Metodo para eliminar, modificar o añadir valores en el array
// .splice(x,y,z)
const array2 = [1,2,3,4,5,6]

//Eliminar valores .splice(indice, cantValoresEliminar)
array2.splice(2, 2)
console.log(array2)

// Añadir valores .splice(indice, 0, valoresAñadir...)
array2.splice(2,0,"Hola",32)
console.log(array2);

// Modificar valores .splice(indice, xCantEliminar, xValoresAñadir)
array2.splice(2,1,3)
console.log(array2);




