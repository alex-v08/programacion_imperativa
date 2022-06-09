

/*
function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

*/

let dameCinco = numeros => [1,2,3,4,5];

let multiplicarPorDos =  numeros => 123 * 2;

let mostrarNombre = texto => "Mi nombre es Hernán";




let saludar1 = nombre => 'Hola, ' + nombre + '!';

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';


console.log (saludar("alex", "pedro"));

console.log("ingrese 2 numeros");
num1, num2 = prompt("ingrese 2 numeros ");

console.log ("la suma es ",suma(num1,num2));
console.log ("la resta es ",esta(num1,num2));
console.log ("la division es ",division(num1,num2));
console.log ("la multiplicacion es ",multiplicacion(num1,num2));


console.log('Zapato' == 'trampa' || "hola" <= "chau") 

console.log("Gato" && "Perro")

// const prompt = require("prompt-sync")({ sigint: true });

// parseInt(prompt("a que hora te levantas? "));

// let horarioEntrenamieto = "22:30"


// var d = new Date();
// document.write(d.getDate());


const transPulgadatoCm = numero => numero * 2.54;


const transURL = url => "https://www." + url + ".com";

const transAdmi = frase => frase + "!";

const calcPerroedad = (edad) => edad * 7;

const CalculoValorHora = (sueldo) => sueldo / 40;

const calculoIMC = (peso, altura) => peso / (altura * altura);

const transURLEpresado = function(url) {

    return "https://www." + url + ".com";   

}
const transfoMayus = frase = frase.toUpperCase();
const tipoPrarametro = (parametro) => {typeof parametro};
const calculoCircunferencia = (radio) => 2 * Math.PI * radio;


//crear una calculadoora donde el usuario ingresa dos valores y se le pide que seleccione una operacion
parseFloat


const calculadora = (numero1, numero2, operacion) => {

    let numero1 = parseInt(prompt("ingrese el primer numero"));
    let numero2 = parseInt(prompt("ingrese el segundo numero"));
    let operacion = prompt("ingrese la operacion que desea realizar");

        if (operacion == "suma") {
            return numero1 + numero2;
        } else if (operacion == "resta") {
            return numero1 - numero2;
        } else if (operacion == "multiplicacion") {
            return numero1 * numero2;
        } else if (operacion == "division") {
            return numero1 / numero2;
        } else {
            return "operacion no valida";
        }

    
        switch(operacion){
    
            case "+":
                return numero1 + numero2;
            case "-":
                return numero1 - numero2;
            case "*":
                return numero1 * numero2;
            case "/":
                return numero1 / numero2;
            default:
                return "operacion no valida";
        }
    }























