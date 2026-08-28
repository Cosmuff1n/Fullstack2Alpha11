

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

function addArrayOne(numbArrayOne) {

    let arrayOne = [1];

    for (let i = 1; i < numbArrayOne; i++) {

        arrayOne[i] = arrayOne[i - 1] * 2;

    }

    return arrayOne;
}

function findMaxNum() {

    const arrayTwo = [5, 12, 33, 13, 15, 16, 7, 11, 9, 1];

    let maxNum = arrayTwo[0];

    for (let i = 1; i < arrayTwo.length; i++) {

        if (arrayTwo[i] > maxNum) {
            maxNum = arrayTwo[i];
        }

    }

    return maxNum;
}

console.log(findMaxNum());

const daysOfWeek = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

function getDayOfWeek(dayNumber) {
if(dayNumber < 1 || dayNumber > 7) {
    console.log("Número de día inválido. Por favor ingrese un número entre 1 y 7.");
    return null;
}
else{
  return daysOfWeek[dayNumber - 1];
}
}

dayNumber = 3;

console.log(getDayOfWeek(3));

/*
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
else console.log("Ingrese un número positivo")*/

