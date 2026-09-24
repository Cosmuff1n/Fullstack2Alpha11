//INDICE LISTA PRODUCTOS
const listaProductos = [
    { id: 1, nombre: "Arena para gatos", precio: 10000, imagen: "assets/arena_gatos.png", ancho: 100, alto: 150 },
    { id: 2, nombre: "Comida para gatos", precio: 35000, imagen: "assets/comida_gatos.png", ancho: 100, alto: 150  },
    { id: 3, nombre: "Comida para perros", precio: 40000, imagen: "assets/comida_perros.png", ancho: 100, alto: 150 },
    { id: 4, nombre: "Cama para perros", precio: 15000, imagen: "assets/cama_perros.png", ancho: 100, alto: 150 },
    { id: 5, nombre: "Pecera", precio: 50000, imagen: "assets/pecera_tortuga.png", ancho: 100, alto: 150 },
    { id: 6, nombre: "Calentador de agua para tortugas", precio: 15000, imagen: "assets/calentador_pecera.png", ancho: 100, alto: 150 },
    { id: 7, nombre: "Jaula para conejos", precio: 120000, imagen: "assets/jaula_conejos.png", ancho: 100, alto: 150 },
    { id: 8, nombre: "Comida para conejos", precio: 40000, imagen: "assets/comida_conejo.png", ancho: 100, alto: 150 }

];

//AGREGAR PRODUCTOS A LA PÁGINA
function cargarProductos() {

    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    listaProductos.forEach(function (producto) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("producto");
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString("es-CL")}</p>
            <button 
                class="btn-carrito"
                data-producto="${producto.nombre}">
                Agregar al carrito
            </button>
        `;
        contenedor.appendChild(tarjeta);
    });
    activarCarrito();
}


//AGREGAR PRODUCTOS AL CARRITO
let cantidadProductos = 0;

function activarCarrito() {

    const botonesCarrito = document.querySelectorAll(".btn-carrito");
    const contador = document.getElementById("contadorCarrito");

    botonesCarrito.forEach(function (boton) {
        boton.addEventListener("click", function () {

            cantidadProductos++;
            contador.textContent = "Productos agregados: " + cantidadProductos;
            const producto = boton.dataset.producto;
            alert(producto + " fue agregado al carrito.");
        });
    });
}

document.addEventListener("DOMContentLoaded", cargarProductos);