// ¿Qué devuelven estos códigos?
// En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
// consola.
//  let numbers =[22, 33, 54, 66, 72] 
//  console.log(numbers[numbers.length]) 

// Fuera de rango el valor de number.lenght es igual a 5. Tengo Razon!




// 2. let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5]) Ironman . Ronald tiene razon.



// 3. let str = “un string cualquiera”
// let arrayAleatorio= ["Digital", "House", “true”, "string", "123","false", “54”, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1]) 

// Salida un string cualquiera. Tengo razon

/*Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

// let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];




// function pelisMayusculas(peliculas) {
//     let peliculasMayusculas = [];
//     for (let i = 0; i < peliculas.length; i++) {
//         peliculasMayusculas.push(peliculas[i].toUpperCase());
//     }
//     return peliculasMayusculas;
// }



/*Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/

// let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// function agregarPeliculas(peliculas, peliculasAnimadas) {

//   //poner en mayusuculas las peliculas animadas
//   let peliculasAnimadasMayusculas = pelisMayusculas(peliculasAnimadas);

//     let peliculasConAnimadas = peliculas.concat(peliculasAnimadas);
//     return peliculasConAnimadas;
// }

// let peliculasMayusculas = pelisMayusculas(peliculas);





// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, 
// pero con las siguientes películas animadas: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" 
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos 
// contenidos en el segundo array dentro del primero, y así retornar un solo array 
// con todas las películas como sus elementos. Importante: las películas animadas también deberían convertirse a mayúsculas. 


/*Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

// let backupPeliculasAnimadas = peliculasAnimadas[peliculasAnimadas.length - 1];

/*Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];*/

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

/*Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.*/

// let calificaciones = asiaScores.concat(euroScores);


// let compararCalificaciones = function (calificaciones) {  
//     let iguales = true;
//     for (let i = 0; i < calificaciones.length; i++) {
//         if (calificaciones[i] != calificaciones[i + 1]) {
//             iguales = false;
//         }
//     }
//     return iguales;
// }
  /*Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/

//   let imprimirInverso = function (array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }

// imprimirInverso(peliculas);
// imprimirInverso(peliculasAnimadas);
// imprimirInverso(calificaciones);
// imprimirInverso(asiaScores);
// imprimirInverso(euroScores);

/*Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.*/

//   let inversor = function (array) {
//     let invertido = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         invertido.push(array[i]);
//     }
//     return invertido;
// }

//   let invertido = inversor(peliculas);

//   console.log(invertido);
//   console.log(peliculas);


/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:*/

//   let sumaArray = function (array) {
//     let suma = 0;
//     for (let i = 0; i < array.length; i++) {
//         suma += array[i];
//     }
//     return suma;
// }

//   let suma = sumaArray([10, 3, 10]);

//   console.log(suma);

  /*Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.*/

//   let join = function (array) {
//     let cadena = "";
//     for (let i = 0; i < array.length; i++) {
//         cadena += array[i];
//     }
//     return cadena;
// }

//   let cadena = join(["Hola", " ", "Mundo", "!"]);
//   console.log(cadena);



let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

// asiaScores.push(8);

//   console.log(asiaScores);

for (let i = 0; i < asiaScores.length; i++) {
    console.log(asiaScores[i]);
}