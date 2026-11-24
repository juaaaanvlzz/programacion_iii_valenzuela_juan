console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Barbería Vlzz - Estilo Clásico";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonAbrir");
boton.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent = "¡Barbería Abierta!";
    console.log("Texto Cambiado en el elemento estado");
    alert("Proceso de Apertura de la Barbería Terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function(){
    mensaje.textContent = "¡Cliente Listo para su Corte!";
});

let cortes = 0;
const contador = document.getElementById("contador");
const nuevoCorte = document.getElementById("nuevoCorte");
nuevoCorte.addEventListener("click", function(){
    cortes += 1;
    contador.textContent = cortes;
});
