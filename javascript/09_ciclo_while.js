console.log("Abrir portal de la nave");
let portal =1 ;
while (portal <= 5) {
    console.log("Portal abierto: "+portal);
    portal++;
}
console.log("Todos los portales abiertos"); 

console.log("Cuenta regresiva para el despegue");
let cuenta=10;
while (cuenta >= 0) {
    console.log("Faltan: "+cuenta+" segundos");
    cuenta--;
}
console.log("Despegue!!");

console.log("Recargar la pistola de portales");
let energia=50;
let recarga=10;
let totalRecarga=0;
while (totalRecarga < energia) {
    totalRecarga += recarga;
    console.log("Recargando... Total: "+totalRecarga);
}
console.log("Pistola de portales recargada");

console.log("Consumo de combustible de la nave");
let combustible=100;
let consumo=45;
let viaje=0;
while (combustible > consumo) {
    combustible -= consumo;
    viaje++;
    console.log("Viaje "+viaje+" realizado. Combustible restante: "+combustible);
    if (combustible <= consumo) {
        console.log("Combustible insuficiente para otro viaje");
    }
}
console.log("Total de viajes realizados: "+viaje);

console.log("Activar portales de dimensiones peligrosas con Do .... While");
let energiaPortal=50;
do {
    console.log("Activando portal de dimensiones peligrosas. Energía restante: "+energiaPortal);
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("Portal de dimensiones peligrosas activado");

console.log("Comprar una pistola de portales");
let ahorro=80;
