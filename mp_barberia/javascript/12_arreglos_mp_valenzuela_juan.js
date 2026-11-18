let barberos = ["Carlos", "Mateo", "Andres", "Juan", "Valenzuela"];
console.log("elemento 0: " + barberos[0]);
console.log("elemento 1: " + barberos[1]);
console.log("elemento 2: " + barberos[2]);
console.log("elemento 3: " + barberos[3]);
console.log("elemento 4: " + barberos[4]);
console.log("tamaño del arreglo: " + barberos.length);

console.log("barberos: ", barberos);
console.log("incluir elementos a un arreglo con push");
barberos.push("Encalada");
barberos.push("Esteban");
barberos.push("Andres");
barberos.push("Juan");
barberos.push("Valenzuela");

console.log("modificar elementos de un arreglo");
barberos[0] = "Carlos Mendoza";
barberos[1] = "Mateo Silva";
barberos[2] = "Andres Gomez";
barberos[3] = "Juan Valenzuela";
barberos[4] = "Valenzuela Esteban";

barberos.unshift("Carlos Mendoza");
barberos[5] = "Mateo Silva";
console.log("barberos: " + barberos);

console.log("eliminar elementos de un arreglo con pop");
barberos.pop();
barberos.shift();
console.log("barberos: " + barberos);