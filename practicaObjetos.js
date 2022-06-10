

// const prompt = require("prompt-sync")({ sigint: true });
// let Camada1 = [];

// const alumno = {

//     nombre: "",
//     nroLegajo: 0,
//     notas: [0],
//     promedio: function() {
//         let suma = 0;
//         for (let i = 0; i < this.notas.length; i++) {
//             suma += this.notas[i];
//         }
//         return suma / this.notas.length;
//     }
//     ,
//     aprobado: function() {
//         if (this.promedio() >= 7) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }   



// // funcion de carga de nuevos alumnos
// let  nuevoAlumnos = function (nombre, notas) {

//     alumno.nombre = nombre;
//     alumno.notas =parseInt(notas);
//     Camada1.push (alumno)


//         }

// // funcion muestra alumnos;
// let mostrarAlumnos = function () {

//     console.log(Camada1.length);

 
// }

// //Funcion menu de opciones

// let menu = function () {

//     let opcion = 1;

//     while(opcion != "3") {
//             opcion = prompt("Ingrese una opcion: \n 1. Cargar nuevo alumno \n 2. Mostrar alumnos \n 3. Salir \n");

//         switch (opcion) {
//             case "1":
//                 nombre = prompt("Ingrese nombre ");
//                 notas = prompt("Ingrese notas ");
//                 nuevoAlumnos(nombre, notas);
//                 break;
//             case "2":
//                 mostrarAlumnos();
//                 break;
//             case "3":
//                 break;
//             default:
//                 console.log("Opcion no valida");
//                 break;
//         }
//     }
// }

// menu();

// console.log(Camada1);


// ordenar un array de numeros
let numeros = [4,5,4,2,3,4,56,6,7,810,2,10,2]

let ordenar = function (numeros) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] < numeros[j]) {
                let aux = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
    return numeros;
}

console.log(ordenar(numeros));
