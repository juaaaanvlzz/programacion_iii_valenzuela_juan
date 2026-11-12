let personajaes = ["Rick", "Morty", "Summer", "Juan", "Valenzuela"];
console.log("elemento 0: " + personajaes[0]);
console.log("elemento 1: " + personajaes[1]);
console.log("elemento 2: " + personajaes[2]);
console.log("elemento 3: " + personajaes[3]);
console.log("elemento 4: " + personajaes[4]);
console.log("tamaño del arreglo: " + personajaes.length);


console.log("personajes: ", personajaes);
console.log("incluir elementos a un arreglo con push");
personajaes.push("Encalada");
personajaes.push("Esteban");
personajaes.push("Summer");
personajaes.push("Juan");
personajaes.push("Valenzuela");

console.log("modificar elementos de un arreglo");
personajaes[0] = "Rick Sanchez";
personajaes[1] = "Morty Smith";
personajaes[2] = "Summer Smith";
personajaes[3] = "Juan Valenzuela";
personajaes[4] = "Valenzuela Esteban";
console.log("personajes: " + personajaes);