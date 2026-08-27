//Declaración de variables
var num1 = 3;
var num2 = 4;
//Se suman las variables num1 y num2 y el resultado se guarda en la variable suma
var suma = num1 + num2;
//Se muestra el resultado en la consola
console.log('La suma es: '+ suma)

try{
edad = 34
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