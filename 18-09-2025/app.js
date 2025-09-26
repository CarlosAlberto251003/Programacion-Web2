//Funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(1,11));

// Funcion ecpresada
const miNumero = function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

