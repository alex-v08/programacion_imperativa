const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("¿Cual es tu nombre? ");
console.log(`Hola ${nombre}`);

