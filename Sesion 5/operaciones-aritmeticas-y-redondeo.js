//Principales operaciones aritmeticas
let a = 3.5
let b = 4.8

//Suma +
console.log(a+b);
//Resta -
console.log(a-b);
//Multiplicacion *
console.log(a*b);
//Division /
console.log(a/b);

// representacion de los numeros en cadena de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// redondear de numeros decimales 
let c = 3.3
let d = c * 3

console.log(d);

// .toFixed(x) - Limitar el numero de decimales al valor x, redondeando y convirtiendo en cadena
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

// .toPrecision(x) - Limita el numero de cifras significativas
console.log(d.toPrecision(7));
console.log(typeof d.toPrecision(7));
