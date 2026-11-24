let silla = 4;
switch (silla) {
    case 1:
        console.log("Estás en la silla 1 con el barbero Carlos");
        break;
    case 2:
        console.log("Estás en la silla 2 con el barbero Andrés");
        break;
    case 3:
        console.log("Estás en la silla 3 con el barbero Luis");
        break;
    case 4:
        console.log("Estás en la silla 4 con el barbero Juan");
        break;
    default:
        console.log("Esa silla no existe en Barbería Vlzz");
}

let servicio = "Fade";
switch (servicio) {
    case "Fade":
    case "Degradado":
        console.log("¡Excelente elección! Un degradado limpio para ti.");
        break;
    case "Barba":
        console.log("¡Perfecto! Vamos a perfilar tu barba.");
        break;
    default:
        console.log("No reconocemos ese servicio, consulta nuestro catálogo.");
}

let largoCabello = 50;
switch (true) {
    case (largoCabello > 0 && largoCabello <= 25):
        console.log("Tu cabello es muy corto, te recomendamos un perfilado.");
        break;
    case (largoCabello > 25 && largoCabello <= 50):
        console.log("Tu cabello es corto, ideal para un fade.");
        break;
    case (largoCabello > 50 && largoCabello <= 75):
        console.log("Tu cabello es mediano, ideal para un pompadour.");
        break;
    case (largoCabello > 75 && largoCabello <= 100):
        console.log("Tu cabello es largo, ¡hay mucho para trabajar!");
        break;
    default:
        console.log("No hay cabello suficiente para un corte.");
}

console.log("Calculadora de la caja");
let precioCorte = 10;
let precioBarba = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = precioCorte + precioBarba;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = precioCorte - precioBarba;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = precioCorte * precioBarba;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (precioBarba !== 0) {
            resultado = precioCorte / precioBarba;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}
