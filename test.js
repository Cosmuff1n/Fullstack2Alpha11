/*
Cree un programa que utilice el objeto persona y entregue todos los datos obtenidos,
de las funciones anteriores:
La persona de:
• Nombre:
• Apellidos:
• Cargas (si/no):
• Cantidad de Cargas familiares:
• Está en el tramo que corresponde al ingreso del semestre anterior:
• Le corresponde por carga familiar el monto:
• Le corresponde el monto total de carga familiar de:
• Su sueldo del mes más las cargas familiares es de
*/



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
  //function assignTramo(result_sb_ant)
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

//console.log("Al Trabajador " + nombre + " " + apellido + " le corresponde valor de familiar " + calcularMontoTotal(calcularValorFamiliar(assignTramo(sb_ant)), cantcargas) + " por su renta del semestre anterior que es: " + sb_ant);

