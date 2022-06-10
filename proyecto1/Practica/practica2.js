const loro = texto => {
    for (let i=0; i<=4;i++){
        console.log(texto);
    }
}




//    En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .
function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let contador = 0;
    for (i=0;i<=numero;i++){
        if (numero%3 ==0) {
            contador+=1;
    }
  
}
return contador;
}

console.log(noParesDeContarImparesHasta(5));

