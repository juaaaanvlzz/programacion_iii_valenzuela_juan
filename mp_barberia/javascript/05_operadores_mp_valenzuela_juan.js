console.log("Operadores Aritméticos");
let precioCorte = 10;
let precioBarba = 5;

console.log("Suma:", precioCorte + precioBarba);
console.log("Resta:", precioCorte - precioBarba);
console.log("Multiplicación:", precioCorte * precioBarba);
console.log("División:", precioCorte / precioBarba);
console.log("Módulo:", precioCorte % precioBarba);

console.log("\nOperadores de Comparación");
console.log("precioCorte es igual a precioBarba:", precioCorte == precioBarba);
console.log("precioCorte es diferente de precioBarba:", precioCorte != precioBarba);
console.log("precioCorte es mayor que precioBarba:", precioCorte > precioBarba);
console.log("precioCorte es menor que precioBarba:", precioCorte < precioBarba);
console.log("precioCorte es mayor o igual que precioBarba:", precioCorte >= precioBarba);
console.log("precioCorte es menor o igual que precioBarba:", precioCorte <= precioBarba);

console.log("\nOperadores Lógicos");
let tieneCita = true;
let barberoDisponible = false;

console.log("tieneCita AND barberoDisponible:", tieneCita && barberoDisponible);
console.log("tieneCita OR barberoDisponible:", tieneCita || barberoDisponible);
console.log("NOT tieneCita:", !tieneCita);
console.log("NOT barberoDisponible:", !barberoDisponible);

console.log("\nOperadores de Asignación");
let caja = 10;
console.log("Valor inicial de la caja:", caja);

caja += 5;
console.log("Después de caja += 5:", caja);

caja -= 3;
console.log("Después de caja -= 3:", caja);

caja *= 2;
console.log("Después de caja *= 2:", caja);

caja /= 4;
console.log("Después de caja /= 4:", caja);

caja %= 3;
console.log("Después de caja %= 3:", caja);

console.log("\nOperadores de Incremento y Decremento");
let clientesEnEspera = 10;
console.log("Clientes en espera inicial:", clientesEnEspera);

clientesEnEspera++;
console.log("Después de clientesEnEspera++:", clientesEnEspera);

clientesEnEspera--;
console.log("Después de clientesEnEspera--:", clientesEnEspera);

console.log("\nOperadores de Concatenación");
let nombreBarbero = "Carlos";
let apellidoBarbero = "Valenzuela";

let nombreCompleto = nombreBarbero + " " + apellidoBarbero;
console.log("Barbero:", nombreCompleto);

console.log("\nOperadores de Comparación Estricta");
let precioNumero = 10;
let precioTexto = "10";

console.log("precioNumero es estrictamente igual a precioTexto:", precioNumero === precioTexto);
console.log("precioNumero es estrictamente diferente de precioTexto:", precioNumero !== precioTexto);

console.log("\nOperador Ternario");
let edadCliente = 16;
let mensaje = (edadCliente >= 18) ? "Puede recibir afeitado con navaja" : "Solo puede recibir corte de cabello";
console.log(mensaje);

console.log("\nTabla de Multiplicar del 5 (precio por número de cortes)");
let precio = 5;
console.log(`1 x ${precio} = ${1 * precio}`);
console.log(`2 x ${precio} = ${2 * precio}`);
console.log(`3 x ${precio} = ${3 * precio}`);
console.log(`4 x ${precio} = ${4 * precio}`);
console.log(`5 x ${precio} = ${5 * precio}`);
console.log(`6 x ${precio} = ${6 * precio}`);
console.log(`7 x ${precio} = ${7 * precio}`);
console.log(`8 x ${precio} = ${8 * precio}`);
console.log(`9 x ${precio} = ${9 * precio}`);
console.log(`10 x ${precio} = ${10 * precio}`);

console.log("\nTabla de División del 5 (cortes por total cobrado)");
console.log(`5 / ${precio} = ${5 / precio}`);
console.log(`10 / ${precio} = ${10 / precio}`);
console.log(`15 / ${precio} = ${15 / precio}`);
console.log(`20 / ${precio} = ${20 / precio}`);
console.log(`25 / ${precio} = ${25 / precio}`);
console.log(`30 / ${precio} = ${30 / precio}`);
console.log(`35 / ${precio} = ${35 / precio}`);
console.log(`40 / ${precio} = ${40 / precio}`);
console.log(`45 / ${precio} = ${45 / precio}`);
console.log(`50 / ${precio} = ${50 / precio}`);
