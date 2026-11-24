console.log("Ciclo For");

for (let i = 1; i <= 5; i++) {
    console.log("Cliente atendido número:", i);
}

console.log("Fin del ciclo For");

console.log("Cuenta regresiva para abrir Barbería Vlzz con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Barbería Vlzz abierta!");
    } else {
        console.log("Faltan " + i + " segundos para abrir la barbería");
    }
}

console.log("Carga de batería de la máquina de cortar");
let bateria = 50;
for (let i = 0; bateria + i <= 100; i += 10) {
    console.log("Nivel de batería actual: " + (bateria + i) + "%");
}

console.log("Consumo de gel por cliente");
let consumoPorCliente = 10;
let totalConsumido = 0;
for (let cliente = 1; cliente <= 5; cliente++) {
    totalConsumido += consumoPorCliente;
    console.log("Cliente " + cliente);
    console.log("Total consumido: " + totalConsumido + " ml de gel");
}
console.log("Total consumido: " + totalConsumido + " ml");

console.log("Promedio de cortes por día");
let totalCortes = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cortes = dia * 5 + 5;
    totalCortes += cortes;
    console.log("Día " + dia + ": " + cortes + " cortes realizados");
}

console.log("Total de cortes realizados: " + totalCortes);
console.log("Promedio de cortes por día: " + (totalCortes / dias).toFixed(2));

console.log("Sillas ocupadas y libres");
let libres = 0;
let ocupadas = 0;
for (let silla = 1; silla <= 10; silla++) {
    if (silla % 2 === 0) {
        console.log("Silla " + silla + " está ocupada");
        ocupadas++;
    } else {
        console.log("Silla " + silla + " está libre");
        libres++;
    }
}
console.log("Total de sillas libres: " + libres);
console.log("Total de sillas ocupadas: " + ocupadas);

console.log("Ganancias diarias de Barbería Vlzz");
let gananciasDiarias = [35, 60, 45, 80, 20, 90, 55];
let total = 0;
let diasExitosos = 0;
for (let i = 0; i < gananciasDiarias.length; i++) {
    total += gananciasDiarias[i];
    console.log("Día " + (i + 1) + ": $" + gananciasDiarias[i] + " ganados");
    if (gananciasDiarias[i] >= 50) {
        diasExitosos++;
    }
}
console.log("Total de ganancias: $" + total);
console.log("Número de días exitosos: " + diasExitosos);

console.log("Recorrer barberos con for...of");
const barberos = ["Carlos", "Andrés", "Luis", "Juan", "Mateo"];
for (let barbero of barberos) {
    console.log("Barbero: " + barbero);
}

let barberia = {
    nombre: "Barbería Vlzz",
    sillas: 4,
    precioCorte: 10,
    equipo: ["Carlos", "Andrés", "Luis"]
};
console.log("Recorrer propiedades de un objeto con for...in");
for (let propiedad in barberia) {
    console.log(propiedad + ": " + barberia[propiedad]);
    if (propiedad === "equipo") {
        console.log("Miembros del equipo:");
        for (let miembro of barberia[propiedad]) {
            console.log("- " + miembro);
        }
    }
}
for (let integrante of barberia.equipo) {
    console.log("Integrante: " + integrante);
}

let metas = [
    { nombre: "Semana 1", cortes: 90, meta: 100, barbero: "Carlos" },
    { nombre: "Semana 2", cortes: 80, meta: 100, barbero: "Andrés" },
    { nombre: "Semana 3", cortes: 95, meta: 100, barbero: "Luis" }
];

let exitosas = 0;
for (let meta of metas) {
    let porcentaje = (meta.cortes / meta.meta) * 100;
    console.log(meta.nombre + " completada por " + meta.barbero + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(meta.nombre + " no fue exitosa, se realizaron menos del 90% de los cortes.");
    }
}
console.log("Número de semanas exitosas: " + exitosas);
