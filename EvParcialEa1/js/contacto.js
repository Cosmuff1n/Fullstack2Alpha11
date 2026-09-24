const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");
    const mensajeRegistro = document.getElementById("mensajeEnvio");

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    mensajeRegistro.textContent = "";

    let valido = true;

    if (nombre.length > 100) {
        errorNombre.textContent ="Ingresa un nombre de máximo 100 caracteres.";
        valido = false;
    }

    if (nombre.length < 1) {
        errorNombre.textContent ="El campo no puede estar vacío.";
        valido = false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        errorEmail.textContent = "Ingresa un correo electrónico válido.";
        valido = false;
    }

    if (email.length > 100) {
        errorEmail.textContent =
            "Ingresa un mail de máximo 100 caracteres.";

        valido = false;
    }

    if (mensaje.length > 500) {
        errorMensaje.textContent ="Ingresa un mensaje de máximo 500 caracteres.";

        valido = false;
    }

    if (mensaje.length < 1) {
        errorMensaje.textContent ="El campo no puede estar vacío.";
        valido = false;
    }

    if (valido) {
        mensajeRegistro.textContent = "Mensaje enviado.";
        formulario.reset();
    }

});