// import averange from 'averange';
// console.log("Gato" && "Perro")

//crear una funcion de fibonacci con recursividad

// let fibonacci = numero => {
//     if (numero == 0) return 0;
//     if (numero == 1) return 1;
//     return fibonacci(numero - 1) + fibonacci(numero - 2);
// }

// console.log(fibonacci(10));


//crear funcion que haga promedios de tres numeros usando una funcion   de recursividad
// let promedio = (numero1, numero2, numero3) => {
//     return (numero1 + numero2 + numero3) / 3;
// }

// let promedio2 = promedio(1, 2, 3);

// let promedio3= averange(1, 2, 3);

// let consolelog = console.log(promedio3);

/*Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje "ACCESO DENEGADO".*/

// let ingreso = prompt("Ingrese su usuario");
// let clave = prompt("Ingrese su clave");

// let login = (ingreso, clave) => {
//     if (ingreso == "ADMIN" && clave == "123456") {
//         console.log("ACCESO PERMITIDO");
//     } else {
//         console.log("ACCESO DENEGADO");
//     }
// }

/*Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];*/

// let nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

// let imprimirNombres = nombres.forEach(nombre =>  console.log(nombre));


// console.log(nombres); 


/*Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".*/

// let nombre = prompt("Ingrese su nombre");

// let saludar = nombre => {
//     console.log("Hola " + nombre + "!");
// }


/*Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario*/

// let aniodeNacimiento = prompt("Ingrese su año de nacimiento");

// let imprimiranio = fechadeNacimiento => {
//     let edad = 2022- fechadeNacimiento;
//     console.log("Tienes " + edad + " años");
// }


/*Escribí un programa que imprima los números pares del 0 al
100.*/


let par = number => {
    if (!(number % 2))return true

}

function imprimirparesHasta(numero){
    
    for (let i=1 ; i<= numero ; i++){
        if (par(i)){console.log(i)}
    }
}

imprimirparesHasta(10)


/*Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.*/

let CalcularSuma = numero => {
    let suma = 0;
    for (let i=0; i<=numero; i++){
        suma += i;
    }
    return suma;
}

