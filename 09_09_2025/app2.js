const frutas = ["Banana"];
frutas.push("Sandia");//final
frutas.unshift("Mango")//inicio
frutas.push("Pera");//final
frutas.unshift("Fresa")//inicio

console.log(frutas);
//completo
for(let fruta of frutas){
    console.log(fruta)
}
frutas.pop();//elimina al final
console.log("---------------")
for(let fruta of frutas){
    console.log(fruta)
}

frutas.shift();//elimina al principio
console.log("---------------")
for(let fruta of frutas){
    console.log(fruta)
}

/*
const puerto = 3306;
puerto=3308;
console.log(puerto);
*/