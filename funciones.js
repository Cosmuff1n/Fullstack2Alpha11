/*function validateStrings(word){
    if(word && word.trim()){
        console.log("Valid");
    }
    else{
        console.log("not valid");
    }
}

function validatePosInt(numint){
    if(numint>0){
        console.log("Valid");
    }
    else{
        console.log("not valid");
    }
}

function validatePosDouble(numdou){
    if(numdou>0){
        console.log("valid");
    }
    else{
        console.log("not valid");
    }
}*/

function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let camposFaltantes = "";

    if (nombre === "") {
        camposFaltantes = camposFaltantes + "- Nombre\n";
    }
    if (correo === "") {
        camposFaltantes = camposFaltantes + "- Correo Electrónico\n";
    }
    if (mensaje === "") {
        camposFaltantes = camposFaltantes + "- Detalle del Pedido\n";
    }

    if (camposFaltantes !== "") {
        alert("Por favor, completa los siguientes campos:\n" + camposFaltantes);
    } else {
        // Si no falta nada, todo está correcto
        alert("¡Pedido enviado con éxito!");
    }
}
