// - Un nuevo Set con los nombres de tu familia
const arrayFam = ["Alexander","Venus","Lili","Fatima"]
const familia = new Set(arrayFam)
console.log(familia)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Alexander")
console.log(familia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript_")
console.log(familia);