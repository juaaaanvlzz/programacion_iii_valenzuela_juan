console. log("Barberia el corte fino: funciones de barberia");

// declaracion creamos la accion 

function abrirBarberia( ) {
    console.log("Silla lista y maquinas encendidas. Pasa y toma asiento ");
}

// llamando a la funcion 

abrirBarberia();
abrirBarberia();
abrirBarberia();

//nombre de un barbero sera su parametro 

function asignarBarbero(nombreBarbero) {
    console.log("El barbero " + nombreBarbero+ " esta listo en su estacion");
}

// Se llama a la funcion y se le asigna un argumento

asignarBarbero("Juan");
asignarBarbero("Esteban");

function cargarMaquina (bateriaActual, cargaExtra) {
    let bateriaTotal = bateriaActual + cargaExtra;

    if (bateriaTotal > 100){
        bateriaTotal =100;
    }

    console.log("Cargando maquina.... Nivel de bateria actual: " + bateriaTotal + "%")

    return bateriaTotal;
}

let bateriaClipper = 50;
bateriaClipper= cargarMaquina(bateriaClipper, 30);
bateriaClipper= cargarMaquina(bateriaClipper, 40);

function calcularDescuento(precioCorte, porcentajeDescuento){
    let precioFinal = precioCorte - (precioCorte * (porcentajeDescuento / 100));
    return precioFinal;
}

let precioNormal = 15;
let descuentoClienteFrecuente = 20;

let precioAPagar = calcularDescuento(precioNormal, descuentoClienteFrecuente);
console.log("Precio normal: " + precioNormal + " Precio con descuento: " + precioAPagar);


function evaluarAprendizYMateriales(nivelDesinfectante, cortesBienHechos, totalCortes) {
    let porcentajeAprobacion = (cortesBienHechos / totalCortes) * 100;

    // Primera validación independiente: insumos
    if (nivelDesinfectante < 20) {
        console.log("Advertencia: Poco desinfectante en estación. Nivel actual: " + nivelDesinfectante + "%");
    }

    // Segunda validación: rendimiento del aprendiz
    if (porcentajeAprobacion >= 70) {
        console.log("¡Felicidades! Has aprobado la prueba con un " + porcentajeAprobacion + "% de cortes perfectos.");
    } else {
        console.log("A seguir practicando. Reprobaste con un " + porcentajeAprobacion + "% de cortes bien hechos.");
    }
}

evaluarAprendizYMateriales(15, 8, 10); // Salta alerta de desinfectante, pero aprueba (80%)
evaluarAprendizYMateriales(50, 6, 10); // Buen nivel de desinfectante, pero reprueba (60%)

let pagosClientes = [10, 15, 20, 10, 25]; // Lista de pagos en dólares

function calcularCajaDelDia(listaPagos) {
    let totalCaja = 0; // Empezamos con la caja en cero
    
    // Recorremos desde la posición 0 hasta el final de la lista
    for (let i = 0; i < listaPagos.length; i++) {
        totalCaja += listaPagos[i]; // Vamos sumando cada pago al total
    }
    
    return totalCaja;
}

let dineroTotal = calcularCajaDelDia(pagosClientes);
console.log("El total facturado hoy en la barbería es: $" + dineroTotal);

let facturasDia = [10, 12, 20, 25, 30];

function contarServiciosVIP(listaFacturas) {
    let cantidadVIP = 0; // Contador en cero
    
    for (let i = 0; i < listaFacturas.length; i++) {
        // Si el pago en la posición 'i' es mayor o igual a 20, sumamos 1 al contador
        if (listaFacturas[i] >= 20) {
            cantidadVIP++; 
        }
    }
    
    return cantidadVIP;
}

let totalClientesVIP = contarServiciosVIP(facturasDia);
console.log("Total de clientes con servicio VIP hoy: " + totalClientesVIP);