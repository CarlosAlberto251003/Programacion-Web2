function abrirModal(modalID, event) {
    const modal = document.getElementById(modalID);
    const contenido = modal.querySelector('.modal-content');

    modal.style.display = "block";

    const alturaModal = contenido.offsetHeight;
    const anchoModal = contenido.offsetWidth;
    
    const altoVentana = window.innerHeight;
    const anchoVentana = window.innerWidth;
    
    let posX = event.clientX;
    let posY = event.clientY;

    if (posY + alturaModal > altoVentana) {
        posY = posY - alturaModal;
        
        if (posY < 0) {
            posY = 20;
        }
    }

    if (posX + anchoModal > anchoVentana) {
        posX = anchoVentana - anchoModal - 20; 
    }

    contenido.style.left = posX + "px";
    contenido.style.top = posY + "px";
}

function cerrarModal(modalID) {
    document.getElementById(modalID).style.display = "none";
}

function llenarEditar(event, id, nombre, email, pass, permisos) {
    document.getElementById('edit_id').value = id;
    document.getElementById('edit_nombre').value = nombre;
    document.getElementById('edit_email').value = email;
    document.getElementById('edit_pass').value = pass;
    
    document.getElementById('edit_permisos').value = permisos;
    
    abrirModal('modalEditar', event);
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}