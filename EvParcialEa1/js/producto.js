//INDICE LISTA PRODUCTOS
const listaProductos = [
    { id: 1, nombre: "Arena para gatos", precio: 10000, imagen: "img/arena_gatos.png" },
    { id: 2, nombre: "Comida para gatos", precio: 35000, imagen: "img/comida_gatos.png" },
    { id: 3, nombre: "Comida para perros", precio: 40000, imagen: "img/comida_perros.png" },
    { id: 4, nombre: "Cama para perros", precio: 15000, imagen: "img/cama_perros.png" },
    { id: 5, nombre: "Pecera", precio: 50000, imagen: "img/pecera_tortuga.png" },
    { id: 6, nombre: "Calentador de agua para tortugas", precio: 15000, imagen: "img/calentador_pecera.png" },
    { id: 7, nombre: "Jaula para conejos", precio: 120000, imagen: "img/jaula_conejos.png" },
    { id: 8, nombre: "Comida para conejos", precio: 40000, imagen: "img/comida_conejo.png" }

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