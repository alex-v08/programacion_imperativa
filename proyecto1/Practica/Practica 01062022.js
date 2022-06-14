// crear funcion de fibonacci

// let fibonacci = numero => {
   
//     if (numero == 0) return 0;
//     if (numero == 1) return 1;
//     return fibonacci(numero - 1) + fibonacci(numero - 2);

// }

// numero = 10;
// for (i=0; i<=numero;i++){

//    console.log(fibonacci(i));

// }



// Ejercicio 2 : crear funcion de factorial

// let factorial = numero => {
//     if (numero == 0) return 1;
//     return numero * factorial(numero - 1);
// }

//console.log(factorial(5));

// Ejercicio 3 : crear funcion de suma de umero.length < 2
// let suma = (numero1, numero2) => {
//     return numero1 + numero2;
// }


//console.log(suma(5, 5));

// Ejercicio 4 : Crear funcion numero primo

// let primo = numero => {
//     if (numero == 1) return false;
//     if (numero == 2) return true;
//     for (let i = 2; i < numero; i++) {i = 0;
// let numero =parseInt(prompt("Ingrese un numero"));
// numero.toString().length;
//     console.log(numero.toString().length);

//     while ((numero.toString().length <= 2)) {
//         numero = numero + 1;
//         i++;
//     }   

// console.log (i);

//     return true;
// }
// i = 0;
// let numero =parseInt(prompt("Ingrese un numero"));
// numero.toString().length;
//     console.log(numero.toString().length);

//     while ((numero.toString().length <= 2)) {
//         numero = numero + 1;
//         i++;
//     }   

// console.log (i);



// Ejercicio : Crear funcion de numero par
// let par = numero => {
//     if (numero % 2 !== 0) return true;
//     return false;
// }   

// // Ejercicio : Crear funcion contar numeros impares hasta el numero ingresado
// let noParesDeContarImparesHasta= numero => {
//     let contador = 0;
//     for (let i = 1; i <= numero; i++) {
//         if (!par(i)) contador++;
//     }
//     return contador;
// }


// console.log(noParesDeContarImparesHasta(500));console.log 

// }

// function noParesDeContarImparesHasta(numero){
//     let cont = 0;
//     for (let i ; i<= numero ; i++){
//         if (impar(i))cont++
//     }// Escribe aqui tu código
//     return cont;
// }

// console.log (noParesDeContarImparesHasta(10))



//Ejercicios 6 : Crear funcion contar numeros pares hasta el numero ingresado

// let contarPar = numero => {
//     let contador = 0;
//     for (let i = 1; i <= numero; i++) {
//         if (!impar(i)) contador++;
//     }
//     return contador;
// }

//console.log(contarPar(10));


// Ejercicio 20


// arregloNombres =  ["pedor","hola","andres","juan","jose","juan","jose"];

// console.log(arregloNombres[2][2]);console.log 
/*Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.*/

// i = 0;
// let numero =parseInt(prompt("Ingrese un numero"));
// numero.toString().length;
//     console.log(numero.toString().length);

//     while ((numero.toString().length <= 2)) {
//         numero = numero + 1;
//         i++;
//     }   

// console.log (i);


let dominio = function(texto) {

    return "http://www." + texto;
    
    
    }
    
    
   console.log( dominio("digitalhouse.com.ar"));


   let reemplazoFastFast = (texto,aReemplazar,reemplazarX )=> {

    return (texto.replace(aReemplazar, reemplazarX))
    
    }
    
    let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
    console.log(textoSinGuiones)

    let menciona =(texto, palabra) => {

        if (texto.indexOf(palabra)!= -1) return true
        return false
     }
     
     

        console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));


let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(frase.indexOf("Carli"))

    console.log(licenciada);


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
        }
      ]
      
      estudiantes.push({nombre: 'Juan',
      
      promedio: 5,
      
      curso: 'iOS'},
      
      {nombre: 'Miguel',
      
      promedio: 2,
      
      curso: 'Android'})


      /*A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello,
por el momento, debemos buscar el carácter “@” en cada elemento y agregar
aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el
carácter, se deberá agregar al array de correos descartados.*/

/*crear un objeto perro*/

let perro = {
    nombre: 'Firulais',
    edad: 2,
    raza: 'Labrador',
    color: 'Cafe',
    ladrar: function(){
        
       return'Guau guau';
    }
  }

  console.log(perro.ladrar());
  
  /* crear array de objet perros*/

  let perros = [
    {
      nombre: 'Robertototo',
      edad: 2,
      raza: 'Labrador',
      color: 'Cafe',
      
    },    { nombre: 'Firulais',
      edad: 2,  
      raza: 'Labrador', 
      color: 'Cafe',  
     
        },
        ladrar: function(){
                                  
          return'Guau guau';
       }     

    }
  ] 

  array.forEach(element => {
    
  });
