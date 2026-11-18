let nombre = "Carlos";
let edad = 32;
let sucursal = "Centro Norte";
let bateria = 100;
let mantenimiento = false;

let barberia = {
    nombre: "Carlos",
    edad: 32,
    sucursal: "Centro Norte",
    bateria: 100,
    mantenimiento: false
};

let inventario = {
    productoUno: 20,
    productoDos: 30,
    productoTres: 50
};

console.log("Informacion de la barberia de Carlos:");
console.log("Nombre del barbero: " + barberia.nombre);
console.log("Edad del barbero: " + barberia["edad"]);
console.log("Sucursal de origen: " + barberia["sucursal"]);
console.log("Nivel de bateria de maquinas: " + barberia.bateria + "%");
console.log("Estado de equipos: " + (barberia.mantenimiento ? "En mantenimiento" : "Operativos"));

console.log("Agregar una nueva propiedad a la barberia de Carlos");
barberia.silla = "Silla Hidraulica Pro";
console.log("Modelo de silla: " + barberia.silla);
barberia["capacidadClientes"] = 5;
console.log("Capacidad de clientes: " + barberia["capacidadClientes"]);
console.log("Barberia de Carlos", barberia);

console.log("Actualizar el nivel de bateria de la barberia de Carlos");
barberia.bateria = 80;
console.log("Nivel de bateria actualizado: " + barberia.bateria + "%");
barberia["mantenimiento"] = true;
console.log("Nuevo estado de los equipos: " + (barberia.mantenimiento ? "En mantenimiento" : "Operativos"));

console.log("Eliminar una propiedad de la barberia de Carlos");
delete barberia.capacidadClientes;
console.log("Propiedad 'capacidadClientes' eliminada.");
console.log("Barberia de Carlos", barberia);

console.log("Recorrer las propiedades de la barberia de Carlos");
for (let propiedad in barberia) {
    console.log(propiedad + ": " + barberia[propiedad]);
}

let unidad = 0;
for (let productos in inventario) {
    unidad += inventario[productos];
}
console.log(unidad);