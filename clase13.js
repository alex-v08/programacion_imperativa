/* Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”. */

let loopDePares = function (numero) {
    for (let i = 0; i <= 100; i++) {
        if (i + numero % 2 === 0) {
            console.log 
            console.log("El número " + i + " es par");
        }else   console.log(i);
    }
}


// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

let loopDeImpares = function (numero, palabra) {
    for (let i = 0; i <= 100; i++) {
        if (i + numero % 2 === 0) {
            console.log(palabra);
        }
        console.log(i);
    }
}   

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36

let sumatoria = function (numero) {    
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
        suma += i;
    }
    return suma;
}

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

let nuevoArreglo = function (numero) {
    let nuevoArreglo = [];
    for (let i = 0; i < numero; i++) {
        nuevoArreglo.push(i + 1);
    }
    return nuevoArreglo;
}

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

let split = function (string) {
    let nuevoArreglo = [];
    for (let i = 0; i < string.length; i++) {
        nuevoArreglo.push(string[i]);
    }
    return nuevoArreglo;
}

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

let arrayHandler = function (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
    }
}

// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

let palindromo = function (string) {
    let stringInvertido = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertido += string[i];
    }
    if (string === stringInvertido) {
        return true;
    }
    return false;
}



// * 
// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// 1 - Funcion que reciba un array de edades y retorne el promedio 
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer Ã­ndice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)
// */

let edades1 = [4, 9, 8, 22, 55, 80, 5, 63, 29, 9];
let edades2 = [10, 9, 4, 22, 22, 80, 11, 63, 44, 9];
let edades3 = [3, 9, 2,11, 55, 80, 5, 63, 2, 9];

let edadesPromedio = function (array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

let edadesMayor = function (array) {
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

let menorEdad = function (array) {

        let menor = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i];
            }
        }
        return mayor;
    }

    let edadesRepetidas = function (array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    let edadesBuscar = function (array, edad) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === edad) {
                return i;
            }
        }
        return null;
    }

    let edadesMenor = function (array) {
        let edadesMenor = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 18) {
                edadesMenor.push(array[i]);
            }
        }
        return edadesMenor;
    }


let objetoLiteral = function (array) {
    let objeto = {
        edadesMenor: edadesMenor(array),
        edadesMayor: edadesMayor(array)
    }
    return objeto;
}


