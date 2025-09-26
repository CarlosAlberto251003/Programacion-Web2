var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Salir\n";
    menu += (productos.length + 3) + ". Actualizar compra\n";
    menu += (productos.length + 4) + ". Eliminar del carrito\n";
    menu += (productos.length + 5) + ". Menú administrador\n";

    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Función para actualizar la compra del usuario
function actualizarCompra() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no hay nada que actualizar.");
        return;
    }

    var mensaje = "Seleccione el número del producto en el carrito para actualizar:\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    var seleccion = Number(prompt(mensaje));

    if (isNaN(seleccion) || seleccion < 1 || seleccion > carrito.length) {
        console.log("Selección inválida.");
        return;
    }

    var nuevoProductoMenu = "Seleccione el nuevo producto para reemplazar:\n";
    for (var j = 0; j < productos.length; j++) {
        nuevoProductoMenu += (j + 1) + ". " + productos[j].nombre + " - $" + productos[j].precio + "\n";
    }

    var nuevoIndex = Number(prompt(nuevoProductoMenu));
    if (isNaN(nuevoIndex) || nuevoIndex < 1 || nuevoIndex > productos.length) {
        console.log("Selección inválida.");
        return;
    }

    carrito[seleccion - 1] = productos[nuevoIndex - 1];
    console.log("Producto actualizado correctamente en el carrito.");
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no hay nada que eliminar.");
        return;
    }

    var mensaje = "Seleccione el número del producto que desea eliminar:\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    var seleccion = Number(prompt(mensaje));

    if (isNaN(seleccion) || seleccion < 1 || seleccion > carrito.length) {
        console.log("Selección inválida.");
        return;
    }

    var eliminado = carrito.splice(seleccion - 1, 1);
    console.log("Producto '" + eliminado[0].nombre + "' eliminado del carrito.");
}

// Menú de administrador
function menuAdministrador() {
    var opcionAdmin;
    do {
        opcionAdmin = Number(prompt(
            "Menú Administrador:\n" +
            "1. Ver productos\n" +
            "2. Agregar producto\n" +
            "3. Eliminar producto\n" +
            "4. Salir\n"
        ));

        switch (opcionAdmin) {
            case 1:
                console.log("Lista de productos disponibles:");
                for (var i = 0; i < productos.length; i++) {
                    console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
                }
                break;
            case 2:
                var nombreNuevo = prompt("Ingrese el nombre del nuevo producto:");
                var precioNuevo = Number(prompt("Ingrese el precio del nuevo producto:"));
                if (nombreNuevo && !isNaN(precioNuevo)) {
                    productos.push({ nombre: nombreNuevo, precio: precioNuevo });
                    console.log("Producto agregado correctamente.");
                } else {
                    console.log("Datos inválidos.");
                }
                break;
            case 3:
                var lista = "Seleccione el producto a eliminar:\n";
                for (var j = 0; j < productos.length; j++) {
                    lista += (j + 1) + ". " + productos[j].nombre + " - $" + productos[j].precio + "\n";
                }
                var eliminarIndex = Number(prompt(lista));
                if (!isNaN(eliminarIndex) && eliminarIndex >= 1 && eliminarIndex <= productos.length) {
                    var eliminado = productos.splice(eliminarIndex - 1, 1);
                    console.log("Producto '" + eliminado[0].nombre + "' eliminado de la tienda.");
                } else {
                    console.log("Selección inválida.");
                }
                break;
        }
    } while (opcionAdmin !== 4);
}

// --- Bucle principal de la tienda ---
var opcion;
do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 5) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 3) {
        actualizarCompra();
    } else if (opcion === productos.length + 4) {
        eliminarDelCarrito();
    } else if (opcion === productos.length + 5) {
        menuAdministrador();
    }
} while (opcion !== productos.length + 2);

console.log("Gracias por visitar la tienda.");
