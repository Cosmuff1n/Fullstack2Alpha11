

function operacion() {

    const suma = document.getElementById('suma');
    const resta = document.getElementById('resta');
    const mult = document.getElementById('mult');
    const div = document.getElementById('div');

    if (suma.checked) {
        sumar();
    }

    else if (resta.checked) {
        restar();
    }

    else if (mult.checked) {
        multi();
        //console.log("Elegiste multiplicación");
    }

    else if (div.checked) {
        //console.log("Elegiste división");
        divi();
    }
}

function sumar() {

    const num1 = parseInt(document.getElementById('num1').value);

    const num2 = parseInt(document.getElementById('num2').value);

    const suma = num1 + num2;

    document.getElementById('result').value = suma;
}

function restar() {

    const num1 = parseInt(document.getElementById('num1').value);

    const num2 = parseInt(document.getElementById('num2').value);

    const resta = num1 - num2;

    document.getElementById('result').value = resta;
}

function multi() {

    const num1 = parseInt(document.getElementById('num1').value);

    const num2 = parseInt(document.getElementById('num2').value);

    const mult = num1 * num2;

    document.getElementById('result').value = mult;
}

function divi() {

    const num1 = parseInt(document.getElementById('num1').value);

    const num2 = parseInt(document.getElementById('num2').value);

    const div = num1 / num2;

    document.getElementById('result').value = div;
}
/*
function suma(num1,num2){
return suma = num1 + num2;
}*/

//console.log("pojo")
try{
edad = 19
}
catch{
    exception("error, debe ser numero entero")
}

if(edad > 0){
    if(edad < 18) console.log("Persona es menor de edad")
    else{
        if(edad<65) console.log("Persona es adulto")

        else{
            if(edad<85) console.log("Persona es adulto mayor")
                else{
            console.log("Persona es de años dorados")
            }
        }
    }
}
else console.log("Ingrese un número positivo")

