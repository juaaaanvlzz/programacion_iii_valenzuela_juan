console.log("Abriendo sillas de Barbería Vlzz...");
let silla = 1;
while (silla <= 5) {
    console.log("Abriendo silla " + silla + ".");
    silla++;
}
console.log("Todas las sillas han sido habilitadas.");

console.log("Cuenta regresiva para abrir Barbería Vlzz");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para abrir la barbería");
    i--;
}
console.log("¡Barbería Vlzz abierta!");

console.log("Recargar la batería de la máquina de cortar");
let bateria = 50;
let recarga = 10;
let totalRecarga = 0;
while (bateria < 100) {
    bateria += recarga;
    totalRecarga++;
    console.log("Recargando la máquina de cortar. Nivel de batería actual: " + bateria + "%");
}
console.log("La máquina de cortar quedó completamente recargada después de "
    + totalRecarga + " recargas");

console.log("Consumo de cera para peinar");
let cera = 100;
let consumo = 10;
let clientes = 0;
while (cera >= consumo) {
    cera -= consumo;
    clientes++;
    console.log("Cliente " + clientes + ". Cera restante: " + cera + " g");
    if (cera < 50) {
        console.log("Advertencia: Cera baja. Nivel actual: " + cera + " g");
    }
}
console.log("No hay suficiente cera para otro cliente.");
console.log("Total de clientes atendidos: " + clientes);

console.log("Afilar navajas con Do...While");
let filoNavaja = 50;
do {
    console.log("Afeitando cliente con navaja. Nivel de filo actual: " + filoNavaja + "%");
    filoNavaja -= 15;
} while (filoNavaja > 0);
console.log("La navaja perdió el filo, hay que cambiarla.");

console.log("Ahorrar para comprar un sillón de barbero nuevo");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: $" + ahorro);
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas. Barbería Vlzz puede comprar el sillón nuevo.");
