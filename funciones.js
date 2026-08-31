function validarFormulario() {

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let camposFaltantes = [];

    if (nombre === "") {
        camposFaltantes.push("nombre");
    }
    if (correo === "") {
        camposFaltantes.push("correo");
    }
    if (mensaje === "") {
        camposFaltantes.push("mensaje");
    }

    if (camposVacios.length > 0) {
        alert("Por favor, completa los siguientes campos:\n" + camposFaltantes.join("\n"));
        return false;
    } else {
        // Si no falta nada, todo está correcto
        alert("¡Pedido enviado con éxito!");
        return true;
    }
}

document
    .getElementById("formContacto")
    .addEventListener("submit", validarFormulario);