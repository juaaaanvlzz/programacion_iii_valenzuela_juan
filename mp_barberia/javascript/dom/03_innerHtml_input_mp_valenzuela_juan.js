const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Bienvenido a Barbería Vlzz";
saludo.innerHTML = `<h1>Tu estilo empieza aquí con innerHTML</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Carlos Mendoza</h1>
    <p>Sucursal: Centro Norte</p>
    <p>Especialidad: Fade y Barba</p>
    <p>Estado: Disponible</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value + ", bienvenido a Barbería Vlzz";
});
