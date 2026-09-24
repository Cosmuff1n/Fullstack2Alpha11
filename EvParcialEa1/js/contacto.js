

//FORMATO PARA MAIL
const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!formatoEmail.test(email)) {
    errorEmail.textContent = "Ingresa un correo electrónico válido.";
    valido = false;
}