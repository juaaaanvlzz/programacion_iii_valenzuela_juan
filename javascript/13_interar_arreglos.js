let cristales = [30, 50, 70, 40];
let posicion = 2;
let nuevaPosicion = 100;
for (let i = 0; i < cristales.length; i++) {
    console.log("Posición " + i );
    console.log("Cristal: " , cristales[i]);
    if(posicion>=0 && posicion<cristales.length){
        cristales[posicion] = nuevaPosicion;
    }else{
        console.log("posicion no valida");
    }
}
console.log("Cristales actualizados: ", cristales);

let personajes = [
    {id: 1, nombre: "Rick", energia: 99, edad: 70},
    {id: 2, nombre: "Morty", energia: 80, edad: 14},
    {id: 3, nombre: "Juan", energia: 100, edad: 20},

];

for (let personaje of personajes) {
    console.log("ID:", personaje.id);
    console.log("Nombre:", personaje.nombre);
    console.log("Energía:", personaje["energia"]);
    console.log("Edad:", personaje["edad"]);
}

console.log("Rick organiza sus misiones: ");
misiones = [
    {
        piloto: "Rick",
        cristales: [30, 50,60]
    },
    {
        piloto: "Morty",
        cristales: [20, 30, 30]
    },
    {
        piloto: "Juan",
        cristales: [90, 80, 70]
    }

];

for (let mision of misiones) {
    totalCristales = 0;
    console.log("Piloto: " + mision.piloto);
    for (let cristal of mision.cristales) {
        console.log("Cristales recolectados: " + cristal);
        totalCristales += cristal;
    }
    console.log("total cristales recolectados por " + mision.piloto + "son: " + totalCristales);
}


let cristalesOriginales = [30, 50, 70, 40];
let cristalesDobles = cristalesOriginales.map(elemento => {
    return elemento * 2;
});
console.log(cristalesDobles);
let validos = cristalesOriginales.filter(elemento => elemento >= 50);
let resultado =cristalesOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log("Resultado de la reducción: ", resultado);
