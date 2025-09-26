/*var miCarro = new Object();
// miCarro.marca = 'Toyota';
// miCarro.modelo = 'Supra';
// miCarro.color = 'Rojo';

// console.log(miCarro)*/

/*

//Ejemplo de arreglo, no es lo mismo que un objeto
let frutas = ["banana", "manzana", "pera"];
console.log(frutas)*/

/*var miCarro = {
    marca: 'Toyota',
    modelo: 'Supra',
    color: 'Rojo'
}

console.log(miCarro)*/

var perro = {
    nombre: 'Shayla',
    color: 'Sal pimienta',
    edad: 28,
    talla: 'mediana',
    enemigos:["Otro perro", "gatos", "baños"]
}

console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos[1]);
perro.raza = 'Schnauzer';
console.log(perro);

//leer
console.log(perro.edad);
//actualizar
perro.edad = 35;
console.log(perro.edad);

//eliminar
delete perro.edad;
console.log(perro);

