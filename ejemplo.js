//Ejercicio 1

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

//Ejercicio 2

edad = 19
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

//Ejercicio 3

function addArrayOne(numbArrayOne) {

    let arrayOne = [1];

    for (let i = 1; i < numbArrayOne; i++) {

        arrayOne[i] = arrayOne[i - 1] * 2;

    }

    return arrayOne;
}

//Ejercicio 4

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

//Ejercicio 5

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

//Ejercicio 6

dayNumber = 3;

console.log(getDayOfWeek(3));


NumArrayFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,];

function searchNumberInArray(numberToSearch) {
console.log("Buscando el número: " + numberToSearch);
if(NumArrayFour.includes(numberToSearch)) {
    console.log("Número encontrado.");
    }
else {
    console.log("No se encontró el número que busca.");
}

}

numberToSearch = 145;

searchNumberInArray(numberToSearch);

numberToSearch = 2;
searchNumberInArray(numberToSearch);

//Ejercicio 7

const arrayFive = [5, 12, 33, 13, 15, 16, 7, 11, 9, 1];

function orderAscending() {

    for (let i = 0; i < arrayFive.length; i++) {

        for (let j = 0; j < arrayFive.length - 1; j++) {

            if (arrayFive[j] > arrayFive[j + 1]) {

                let temporary = arrayFive[j];

                arrayFive[j] = arrayFive[j + 1];

                arrayFive[j + 1] = temporary;
            }
        }
    }

    return arrayFive;
}

console.log(orderAscending());

//Ejercicio 8

function writeInCaps(fname, lname) {
  return fname.toUpperCase() + " " + lname.toUpperCase();
}

firstname = "Pepe";
lastname = "Pulga";

console.log(writeInCaps(firstname,lastname));

//Ejercicios 9 y 10

nombre = "alvaro"
apellido = "gonzalez"

sb_actual = 10000
sb_ant = 439899

cfamiliares = true;
cantcargas = 3;

function assignTramo(sb_ant)
  {
    if(sb_ant < 429899) return "a";
    else if(sb_ant >= 429899 && sb_ant < 627913) return "b";
  else if(sb_ant >= 627913 && sb_ant < 979330) return "c";
  else return "d";
  }

  function calcularValorFamiliar(result_sb_ant)
  {
    if(result_sb_ant=="a") return 0;
    else if(result_sb_ant=="b") return 3264;
  else if(result_sb_ant=="c") return 10327;
  else return 16828;
  }

  function calcularMontoTotal(valorcfamiliar, cantcargas){
    return valorcfamiliar * cantcargas;
  }

if(cfamiliares) calcularMontoTotal(calcularValorFamiliar(assignTramo(sb_ant)), cantcargas);


function validateBool(booleanValue){
  if(booleanValue) return "Si";
  else return "No";
}

console.log("Nombre:" + nombre 
  + "\nApellido:" + apellido 
  + "\nCargas: "+ validateBool(cfamiliares) 
  +"\nCantidad de Cargas familiares:" + cantcargas 
  + "\nTramo: " + assignTramo(sb_ant) 
  + "\nMonto por carga familiar: " + calcularValorFamiliar(assignTramo(sb_ant))
  + "\nTotal Montos por cargas familiares: " + calcularMontoTotal(calcularValorFamiliar(assignTramo(sb_ant)), cantcargas)
  + "\nSueldo del mes más cargas familiares: " + (sb_actual + calcularMontoTotal(calcularValorFamiliar(assignTramo(sb_ant)), cantcargas)));