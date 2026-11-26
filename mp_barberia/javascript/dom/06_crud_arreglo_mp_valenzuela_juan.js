let barberos = [
    {
        id: 1,
        nombre: "Carlos Mendoza",
        sucursal: "Centro Norte",
        estado: "Disponible"
    },
    {
        id: 2,
        nombre: "Mateo Silva",
        sucursal: "Sur",
        estado: "Ocupado"
    },
    {
        id: 3,
        nombre: "Andres Gomez",
        sucursal: "Valle",
        estado: "En descanso"
    }
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const sucursal = document.getElementById("sucursal");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarBarberos() {
    contenedor.replaceChildren();
    if (cantidad) {
        cantidad.textContent = barberos.length;
    }

    barberos.forEach(function (barbero) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = barbero.nombre;

        const parrafoSucursal = document.createElement("p");
        parrafoSucursal.textContent = "Sucursal: " + barbero.sucursal;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + barbero.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarBarbero(barbero.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar a ${barbero.nombre}?`);
            if (!confirmarEliminar) return;

            barberos = barberos.filter(function (b) {
                return b.id !== barbero.id;
            });
            if (idEditando === barbero.id) {
                limpiarFormulario();
            }
            mostrarBarberos();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoSucursal, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

let idEditando = null;

function editarBarbero(id) {
    const barbero = barberos.find(function (b) {
        return b.id === id;
    });
    if (!barbero) return;

    nombre.value = barbero.nombre;
    sucursal.value = barbero.sucursal;
    estado.value = barbero.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarBarberos();

let siguienteId = 4;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreBarbero = nombre.value.trim();
    const sucursalBarbero = sucursal.value;
    const estadoBarbero = estado.value;

    if (nombreBarbero === "") return;

    if (idEditando === null) {
        const nuevoBarbero = {
            id: siguienteId,
            nombre: nombreBarbero,
            sucursal: sucursalBarbero,
            estado: estadoBarbero
        };
        siguienteId++;
        barberos.push(nuevoBarbero);
    } else {
        const barbero = barberos.find(function (b) {
            return b.id === idEditando;
        });
        if (barbero) {
            barbero.nombre = nombreBarbero;
            barbero.sucursal = sucursalBarbero;
            barbero.estado = estadoBarbero;
        }
        idEditando = null;
        guardar.textContent = "Agregar";
        cancelar.hidden = true;
    }

    formulario.reset();
    mostrarBarberos();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});
