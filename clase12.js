// /*La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0], a[1] con b[1] y
// a[2] con b[2].
// Si a[i] > b[i], entonces, Alicia recibe 1 punto.
// Si a[i] < b[i], entonces, Bob recibe 1 punto.
// Si a[i] === b[i], ninguna persona recibe un punto.
// Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
// votos, sino los puntos ganados en cada etapa.*/

// /*Para finalizar, se necesita enviar los resultados a otra aplicación, por lo que deberás crear
// un JSON con la propiedad etapas para poder compartirlo. Creá un método
// exportarResultados que haga esta conversión.*/

// // const alicia = [10, 80, 75];
// // const bob = [90, 20, 25];

// // function encontrarGanador(a, b) {
// //     let puntosAlicia = 0;
// //     let puntosBob = 0;

// //     for (let i = 0; i < a.length; i++) {
// //         if (a[i] > b[i]) {
// //             puntosAlicia++;
// //         } else if (a[i] < b[i]) {
// //             puntosBob++;
// //         }
// //     }

// //     if (puntosAlicia > puntosBob) {
// //         return "Alicia";
// //     } else if (puntosAlicia < puntosBob) {
// //         return "Bob";
// //     } else {
// //         return "Empate";
// //     }
// // }


// // console.log("El ganador es: " + encontrarGanador(alicia, bob));

// // let crearJson = function (etapas) {
// //     let json = {
// //         etapas: etapas
// //     }
// //     return json;
// // }





// /*digitalHouse()
// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número.*/

// // let digitalHouse = function (numero1, numero2) {
// //     for (let i = 1; i <= 100; i++) {
// //         if (i % numero1 === 0) {
// //             console.log("Digital");
// //         } else if (i % numero2 === 0) {
// //             console.log("House");
// //         } else if (i % numero1 === 0 && i % numero2 === 0) {
// //             console.log("Digital House");
// //         } 
// //         }
// //     }


// // digitalHouse(2, 3);

// /*sumArray()... Reloaded
// Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez
// lo modificaremos para que pueda recibir un array de números de cualquier cantidad de
// elementos.
// Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
// un arreglo de números y devuelva la suma de todos ellos.
// Ejemplo:

// 4

// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10, 4]) // 27
// ● sumArray([-5,100]) // 95*/
// // let sumArray = function (array) {
// //     let suma = 0;
// //     for (let i = 0; i < array.length; i++) {
// //         suma += array[i];
// //     }
// //     return suma;
// // }

// // console.log(sumArray([1,2,3]) + " es la suma de los elementos del array");
// // console.log(sumArray([10, 3, 10, 4])+ " es la suma de los elementos del array");
// // console.log(sumArray([-5,100])+ " es la suma de los elementos del array");


// /*
// Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio
// simulación join(). Deberás modificar la función join() de manera que pueda recibir un
// array de strings de cualquier cantidad de elementos.
// Importante: no podés usar el método Array.join() original.
// Por ejemplo:
// join(["h","o","l","a"]) debe retornar el string "hola".
// join(["c","h","a,"u"]) debe retornar el string "chau".*/

// // let join = function (array) {
// //     let string = "";
// //     for (let i = 0; i < array.length; i++) {
// //         string += array[i];
// //     }
// //     return string;
// // }

// // console.log(join(["h","o","l","a"]) + " es el string que se obtiene de un array");
// // Var1 = 7

// // var2 = 4

// // aux = var1 (7)
// // var1 = var2 (4)
// // var2 = aux









let ordenarArreglo = function (array_numeros){

    let aux=0;
    for (let i=0; i<array_numeros.length;i++){
        for (let j=0; j<array_numeros.length;j++){

            if (array_numeros[i] < array_numeros[j]) {
                aux = array_numeros[i];
                array_numeros[i] = array_numeros[j];
                array_numeros[j] = aux;
            }

    }
}return array_numeros
}


let arrayNumeros = [5,3,4,10,7,9,12,6,21,8,9,1,20,11]

console.log (ordenarArreglo(arrayNumeros))