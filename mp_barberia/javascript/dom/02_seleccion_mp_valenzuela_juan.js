const clientes = document.getElementById("clientes");
const sucursal = document.getElementById("sucursal");
const silla = document.getElementById("silla");

clientes.textContent = "Clientes en espera: 5";
sucursal.textContent = "Sucursal: Centro Norte";
silla.textContent = "Silla: ocupada";

// Selección a través del nombre de la clase
const barbero = document.querySelector(".barbero");
barbero.textContent = "Carlos Mendoza";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Herramientas";

const turno = document.querySelector("#turno");
turno.textContent = "Preparando Turno";

const estadoCliente = document.querySelector("#cliente .estado");
estadoCliente.textContent = "Listo en la Silla";

const servicios = document.querySelectorAll(".servicios");
console.log(servicios);
console.log(servicios.length);

console.log(servicios[0].textContent);
console.log(servicios[1].textContent);
console.log(servicios[2].textContent);
console.log(servicios[3].textContent);

for (let i = 0; i < servicios.length; i++){
    console.log(servicios[i].textContent);
}
console.log("Con forEach");
servicios.forEach(function(servicio){
    console.log(servicio.textContent);
});

console.log("Con for of");
for (let servicio of servicios){
    console.log(servicio.textContent);
}
