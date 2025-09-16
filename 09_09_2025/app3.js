const frutas =[];

const fruta = prompt ("Tienda de fruta, que fruta quiere comprar: ");

frutas.push(fruta);

while(confirm("Quiere agregar otra fruta")){
    const fruta = prompt("¿Que otra fruta quiere agregar?");
    frutas.push(fruta);
}

console.log("Compro");
for (let fruta of frutas){
    console.log(fruta);
}

alert("Compro:\n" + frutas.join("\n"));