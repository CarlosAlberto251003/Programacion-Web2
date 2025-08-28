let operacion = prompt("Ingresa la operacion: ")
let numero1 = parseFloat(prompt("Ingresa Numero 1: "));
let numero2 = parseFloat(prompt("Ingresa Numero 2: "));


switch (operacion){
    case "suma":
        let suma = (numero1 + numero2);
        console.log("el resultado de la suma: "+suma);
    break;    
    case "resta":
        let resta = (numero1 - numero2);
        console.log("el resultado de la resta: "+resta);
    break;
    case "multiplicacion":
        let multiplicacion =(numero1 * numero2);
        console.log("el resultado de la multiplicacion: "+multiplicacion);
    break;
    case "division":
        let division = (numero1/numero2);
        console.log("el resultado de la division: "+division)
    break;

}





