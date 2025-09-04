let optionUser= prompt(`
    selecciona una opcion
        1.- libros
        2.- peliculas
        3.- juegos
    `);

switch(optionUser){
    case "1":
        console.log("principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("FIFA");
        break;
    default:
        console.log("opcion no valida");
        break;
}