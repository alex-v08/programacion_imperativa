/*Programación Imperativa

Objetos literales
Como vimos, los objetos son unas de las estructuras más importantes de la
programación, tanto que hay toda un área en función de ellos. Para entender mejor por
qué son tan útiles e importantes vamos a realizar una serie de prácticas con el fin de
afianzar las particularidades y utilidades que nos ofrecen.
Para esta actividad, recordá que podés verificar cada punto ejecutando los métodos y las
operaciones que realices para asegurarte de que todo funcione correctamente.
Descripción del problema
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:

● N.o de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).

Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:
1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias).

1

2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
impresionados con tu trabajo.

Bonus extra
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
proponemos algunos ejercicios más. Tené en cuenta que a partir de acá los ejercicios
pueden escalar en dificultad. Como siempre decimos, paciencia, ignorá la complejidad y
tratá de resolverlo con las herramientas que tengas a tu disposición. También podés
buscar información extra en Google o documentaciones que conozcas.

2

Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
Calculador de notas
Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.*/

// //la lista de clientes.
// let arrayCuentas = [
//     {
//       nroCuenta: 5486273622,
//       tipoDeCuenta: "Cuenta Corriente",
//       saldoEnPesos: 27771,
//       titularCuenta: "Abigael Natte",
//     },
//     {
//       nroCuenta: 1183971869,
//       tipoDeCuenta: "Caja de Ahorro",
//       saldoEnPesos: 8675,
//       titularCuenta: "Ramon Connell",
//     },
//     {
//       nroCuenta: 9582019689,
//       tipoDeCuenta: "Caja de Ahorro",
//       saldoEnPesos: 27363,
//       titularCuenta: "Jarret Lafuente",
//     },
//     {
//       nroCuenta: 1761924656,
//       tipoDeCuenta: "Cuenta Corriente",
//       saldoEnPesos: 32415,
//       titularCuenta: "Ansel Ardley",
//     },
//     {
//       nroCuenta: 7401971607,
//       tipoDeCuenta: "Cuenta Unica",
//       saldoEnPesos: 18789,
//       titularCuenta: "Jacki Shurmer",
//     },
//   ];
//   // podes continuar tu codigo a partir de aca!
//   let banco = {
//     clientes: arrayCuentas,
//     consultarCliente: function(nombre) {
//         let clienteEncontrado = this.clientes.find(cliente => cliente.titularCuenta === nombre);
//         return clienteEncontrado;
        
//         },
//     depositar: function(titular, cantidad) {
//         let clienteEncontrado = this.consultarCliente(titular);
//         clienteEncontrado.saldoEnPesos += cantidad;
//         console.log(`Deposito realizado, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`);
//         },
//     extraer: function(titular, cantidad) {
//         let clienteEncontrado = this.consultarCliente(titular);
//         if (clienteEncontrado.saldoEnPesos - cantidad < 0) {
//             console.log("Fondos insuficientes");
//         } else {
//             clienteEncontrado.saldoEnPesos -= cantidad;
//             console.log(`Extracción realizada correctamente, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`);
//         };
//         }
//     }

//     console.log(banco.consultarCliente("Abigael Natte"));
//     banco.depositar("Ramon Connell", 1000);
//     banco.extraer("Ramon Connell", 100500);

//     let propiedadUnica = function(array, propiedad) {
//         let arrayNuevo = [];
//         for (let i = 0; i < array.length; i++) {
//             arrayNuevo.push(array[i][propiedad]);
//         }
//         return arrayNuevo;
//     }


// let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]
// console.log(propiedadUnica(array, "edad") )//debe retornar [ { edad: 27 }, { edad: 49 } ]
// console.log (propiedadUnica(array, "nombre") )//debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]


// let alumno = {

//     nombre: "Roberto to to to to ",
//     nroLegajo: 5189387,
//     notas: [10, 9, 8, 7, 6],
//     promedio: function() {
//         let suma = 0;
//         for (let i = 0; i < this.notas.length; i++) {
//             suma += this.notas[i];
//         }
//         return suma / this.notas.length;
//     }
//     ,
//     aprobado: function() {
//       return this.promedio() >= 7;
//     }
// }   
// console.log(alumno.promedio());
// console.log(alumno.aprobado());


// //usando el objeto alumno1, crear una funcion que reciba un nombre y una nota y que
// //agregue la nota al array de notas.

// let alumno1 = alumno;

// alumno1.nombre = "Andres";
// alumno1.notas.push(10, 9, 5, 6, 9);


// console.log(alumno1.nombre);
// console.log(alumno1.notas);
// console.log (alumno1.promedio())

// let Camada1 = [];


// // funcion de carga de nuevos alumnos
// let  nuevoAlumnos = function (nombre, notas) {

    

//     Camada1 = 



// /*    En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .*/

// function noParesDeContarImparesHasta(numero) {
//     let contador = 0;
//     for (let i = 0; i <= numero; i++) {
//         if (i % 2 != 0) {
//             contador++;
//         }
//     }
//     return contador;
// }

// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       promedio : 9,
//       curso : 'Android',
//     },
//     {
//       nombre: 'Daniel',
//       promedio : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nombre: 'Alexis',
//       promedio : 3,
//       curso : 'iOS',
//     }
//   ]
  
//   let estudiantesNuevos = [
  
//     {nombre: "Mariana",
  
//   promedio: 9,
  
//   curso: "Full Stack"},
//    {nombre: "Francisco",
  
//   promedio: 2,
  
//   curso: "Android"}
//   ]


//   //agregar elemetnos de estudiantesNuevos a estudiantes usando unshift

//     estudiantes.unshift(estudiantesNuevos.forEach(Elemento => {estudiantesNuevos[Elemento]}));
//     console.log(estudiantes);





/*Ejercicio 5: unshift()
Se reintegraron alumnos.

    Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).

    Los datos que hay que agregar de cada uno son:

    nombre: "Mariana",

    promedio: 9,

    curso: "Full Stack"

    -------------------------

    nombre: "Francisco",

    promedio: 2,

    curso: "Android"*/

    let estudiantes = [
        {
           nombre: 'Alvaro',
           promedio : 9,
           curso : 'Android',
         },
          {
            nombre: 'Daniel',
            promedio : 6,
            curso : 'Full Stack',
          },
          {
            nombre: 'Alexis',
            promedio : 3,
            curso : 'iOS',
          },
        ]
        let estudiantesNuevos = [
            {nombre: "Mariana",
                promedio: 9,    
                curso: "Full Stack"},
            {nombre: "Francisco",
                promedio: 2,
                curso: "Android"}   
        ]           
        estudiantes.unshift( 
            {nombre: "Mariana",
                promedio: 9,    
                curso: "Full Stack"},
            {nombre: "Francisco",
                promedio: 2,
                curso: "Android"}   
                          );
        console.log(estudiantes);

