function validarFormulario(event) {

    event.preventDefault(); //Con esto prevenimos que se regrese a la página principal

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let camposFaltantes = [];//guardamos en una lista los requerimientos a cumplir

    if (email === "") {
        camposFaltantes.push("email");
    }

    if (password === "") {
        camposFaltantes.push("password");
    }

    if (camposFaltantes.length > 0) {
        alert(
            "Por favor, completa los siguientes campos:\n" +
            camposFaltantes.join("\n"));

    } else {
        alert("Login exitoso");
        window.location.replace("index.html");//redirige a la página si se cumple el login
    }
}

document
    .getElementById("loginForm")
    .addEventListener("submit", validarFormulario);