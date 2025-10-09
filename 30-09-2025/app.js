// Iniciamos con un arreglo para almacenar tareas
let tareas = [];

// Función para mostrar el menú de opciones
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar tarea como completada
        4.- Eliminar tarea
        5.- Salir
        Elige una opción:
    `));
}

// Función para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce el nombre de la tarea");
    if(nombre){
        // Agregar una tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agregó de manera exitosa!");

    }else{
        alert("El nombre de la tarea no puede estar vacío");
    }
}

// Función para ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas:\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// Función para marcar tarea como completada
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el número de la tarea que deseas marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].completado = true;
        alert(`La tarea "${tareas[numero - 1].nombre}" ha sido marcada como completada.`);
    }else{
        alert("Número de tarea inválido");
    }
}

// Nueva función: eliminar tarea
function eliminarTarea(){
    let numero = parseInt(prompt("Introduce el número de la tarea que deseas eliminar"));
    if(numero > 0 && numero <= tareas.length){
        let tareaEliminada = tareas.splice(numero - 1, 1);
        alert(`La tarea "${tareaEliminada[0].nombre}" ha sido eliminada.`);
    }else{
        alert("Número de tarea inválido");
    }
}

// Función para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1: 
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
    alert("Programa finalizado");
}

// Iniciar programa
iniciarPrograma();
