function mayusculas(nombre, apellidos) {
  return nombre.toUpperCase() + " " + apellidos.toUpperCase();
}

nombre = "Pepe";
apellido = "Pulga";

console.log(mayusculas(nombre,apellido)); // Devuelve "JUAN PÉREZ"