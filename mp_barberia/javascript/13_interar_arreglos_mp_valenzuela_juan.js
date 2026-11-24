let preciosCortes = [30, 50, 70, 40];
let posicion = 2;
let nuevoPrecio = 100;
for (let i = 0; i < preciosCortes.length; i++) {
    console.log("Posición " + i);
    console.log("Precio: ", preciosCortes[i]);
    if (posicion >= 0 && posicion < preciosCortes.length) {
        preciosCortes[posicion] = nuevoPrecio;
    } else {
        console.log("posicion no valida");
    }
}
console.log("Precios actualizados: ", preciosCortes);

let barberos = [
    { id: 1, nombre: "Carlos", energia: 99, edad: 35 },
    { id: 2, nombre: "Mateo", energia: 80, edad: 22 },
    { id: 3, nombre: "Juan", energia: 100, edad: 20 }
];

for (let barbero of barberos) {
    console.log("ID:", barbero.id);
    console.log("Nombre:", barbero.nombre);
    console.log("Energía:", barbero["energia"]);
    console.log("Edad:", barbero["edad"]);
}

console.log("Carlos organiza los turnos de la barbería: ");
let jornadas = [
    {
        barbero: "Carlos",
        ingresos: [30, 50, 60]
    },
    {
        barbero: "Mateo",
        ingresos: [20, 30, 30]
    },
    {
        barbero: "Juan",
        ingresos: [90, 80, 70]
    }
];

for (let jornada of jornadas) {
    let totalIngresos = 0;
    console.log("Barbero: " + jornada.barbero);
    for (let ingreso of jornada.ingresos) {
        console.log("Ingreso por servicio: " + ingreso);
        totalIngresos += ingreso;
    }
    console.log("total ingresos recaudados por " + jornada.barbero + " son: " + totalIngresos);
}

let tarifasOriginales = [30, 50, 70, 40];
let tarifasDobles = tarifasOriginales.map(elemento => {
    return elemento * 2;
});
console.log(tarifasDobles);
let validos = tarifasOriginales.filter(elemento => elemento >= 50);
let resultado = tarifasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log("Resultado de la reducción: ", resultado);