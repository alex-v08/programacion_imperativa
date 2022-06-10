
let arreglo = [4,5,4,2,3,4,56,6,7,810,2,10,2]

function ordenar (array1) {
let aux=0;
let i = 0;
let j =1;
console.log ("valor de i es", i)
console.log ("valor de j es ", j)
console.log("valor aux", aux)
console.log("valor Array[i]", array1[i])
console.log("valor Array[j]", array1[j])
    for (let i =0; i < array1.length; i++) {

       for (let j =1; j< array1.length; j++){

            if (array1[i]<array1[j]){

                aux=array1[ i ]
                array1[ i ] = array1[ j ]
                array1[j] = aux
                console.log ("valor de i es", i)
                console.log ("valor de j es ", j)
                console.log("valor aux", aux)
                console.log("valor Array[i]", array1[i])
                console.log("valor Array[j]", array1[j])
            }
       }
}
}

ordenar(arreglo)

console.log(arreglo);