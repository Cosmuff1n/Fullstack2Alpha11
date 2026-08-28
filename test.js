/*
Dado un arreglo de String que contiene los días de la semana, cree una función
que le permita obtener un día en particular si se recibe su número
correspondiente, por ejemplo: 1 = lunes, 7 = domingo
*/

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