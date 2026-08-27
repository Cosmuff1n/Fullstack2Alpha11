//Declaración de variables
//var num1;
//var num2;
/*Se suman las variables num1 y num2 y el resultado se guarda en la variable suma
var suma = num1 + num2;
*/
//Se muestra el resultado en la consola
console.log('La suma es: '+ suma)

//Declaración de variables

//Se suman las variables num1 y num2 y el resultado se guarda en la variable suma
var resta = num1 - num2;
//Se muestra el resultado en la consola
console.log('La resta es: '+ resta)

//Declaración de variables

//Se suman las variables num1 y num2 y el resultado se guarda en la variable suma
var mult = num1 * num2;
//Se muestra el resultado en la consola
console.log('La multiplicación es: '+ mult)

//Declaración de variables

//Se suman las variables num1 y num2 y el resultado se guarda en la variable suma
var div = num1 / num2;
//Se muestra el resultado en la consola
console.log('La división es: '+ div)

function sumar() {

    const num1 = parseInt(document.getElementById('num1').value);

    const num2 = parseInt(document.getElementById('num2').value);

    const suma = num1 + num2;

    document.getElementById('result').value = suma;
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

