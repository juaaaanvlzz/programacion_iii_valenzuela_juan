console.log("Jornada de trabajo en Barbería Vlzz");

let cortesObjetivo = 40;
let cortesRealizados = 30;
let productosIniciales = 100;
let productosUsados = 80;
let barberoEnfermo = "si";
let maquinaDanada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (cortesRealizados / cortesObjetivo) * 100;
let productosRestantes = productosIniciales - productosUsados;

console.log("Resultados de la jornada:");

if (porcentajeCumplimiento >= 90) {
    console.log("Jornada cumplida con éxito");
} else if (porcentajeCumplimiento > 70) {
    console.log("Jornada cumplida parcialmente");
} else if (porcentajeCumplimiento > 50) {
    console.log("Jornada regular, se requiere mejorar");
} else {
    console.log("Jornada fallida");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && productosRestantes >= 20) {
    bonificacion = 50;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Estado para la siguiente jornada");

if (barberoEnfermo === "no" && maquinaDanada === "no") {
    console.log("La barbería abre con normalidad mañana.");
} else if (barberoEnfermo === "si" && maquinaDanada === "no") {
    console.log("La barbería abre con precaución, un barbero está enfermo.");
} else if (barberoEnfermo === "no" && maquinaDanada === "si") {
    console.log("La barbería abre con precaución, la máquina de cortar está dañada.");
} else {
    console.log("La barbería abre con precaución, un barbero está enfermo y la máquina está dañada.");
}

console.log("Resumen de la jornada");
console.log("Cortes Objetivo:", cortesObjetivo);
console.log("Cortes Realizados:", cortesRealizados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Productos Iniciales:", productosIniciales);
console.log("Productos Usados:", productosUsados);
console.log("Productos Restantes:", productosRestantes);
console.log("Barbero Enfermo:", barberoEnfermo);
console.log("Máquina Dañada:", maquinaDanada);
console.log("Bonificación Otorgada: $" + bonificacion);
