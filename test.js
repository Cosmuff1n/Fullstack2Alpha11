/*
• Cree una segunda función que muestre los datos de Nombre y Apellidos
y solicite dos montos (dos números enteros) para sueldo base actual y
sueldo base promedio del semestre anterior, que ingrese el dato de si
tiene cargas familiares autorizadas y, si tiene cargas familiares
autorizadas, retorne otro entero que sea el valor que le corresponde
según la tabla siguiente:
• El valor para usar como renta es el monto del semestre anterior.
• La salida será: “Al Trabajador NOMBRE APELLIDOS le corresponde
valor de familiar (0, 3264, 10327 o 16828) por su renta del semestre
anterior que es: monto (uno de los 4).
• Cree una función que, para las personas que, si tienen asignación
familiar, consulte la cantidad de “beneficiados con carga familiar (recibe
como parámetro un número entero r que indique la cantidad de personas
con el beneficio) y retorne el número que corresponda al monto a recibir
por carga familiar, obtenido en el punto anterior, multiplicado por la
cantidad de beneficiarios. Por ejemplo, una persona con beneficio de
10327 y 3 cargas familiares deberá responder con 3098
*/

nombre = "alvaro"
apellido = "gonzalez"

sb_actual = 10000
sb_ant = 32000

cfamiliares = true;
cantcargas = 3;

function calcularValorFamiliar(sb_ant)
  {
    if(sb_ant < 429899) return 0;
    else if(sb_ant >= 429899 && sb_ant < 627913) return 3264;
  else if(sb_ant >= 627913 && sb_ant < 979330) return 10327;
  else return 16828;
  }

  function calcularMontoTotal(valorcfamiliar, cantcargas){
    return valorcfamiliar * cantcargas;
  }

if(cfamiliares) calcularMontoTotal(calcularValorFamiliar(sb_ant), cantcargas);



  /*if(sb_ant < 3264){
    console.log("Al Trabajador " + nombre + " " + apellido + " le corresponde valor de familiar 0 por su renta del semestre anterior que es: " + sb_ant);
  }
  else if(sb_ant >= 3264 && sb_ant < 10327){
    console.log("Al Trabajador " + nombre + " " + apellido + " le corresponde valor de familiar 3264 por su renta del semestre anterior que es: " + sb_ant);
  }
  else if(sb_ant >= 10327 && sb_ant < 16828){
    console.log("Al Trabajador " + nombre + " " + apellido + " le corresponde valor de familiar 10327 por su renta del semestre anterior que es: " + sb_ant);
  }
  else{
    console.log("Al Trabajador " + nombre + " " + apellido + " le corresponde valor de familiar 16828 por su renta del semestre anterior que es: " + sb_ant);
  }}*/
