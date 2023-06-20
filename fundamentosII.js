/*1 Tamaño Grande - Dado un array, escribe una función que cambie todos los números 
positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) 
devuelve [-1, “big”, “big”, -5]. */
function cambiarNegativos(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}
var arr = [-1,3,5,-5];
console.log(cambiarNegativos(arr));

/*2 Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un 
array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) 
el mayor.  */
function printArr(myArr) {
    var menor = myArr[0];
    var mayor = myArr[0];

    for(var i=0; i <myArr.length; i++){
        if (myArr[i] < menor) {
            menor = myArr[i];

        }if(myArr[i]>mayor){
            mayor = myArr[i];
        }
    }
    console.log(menor)
    return mayor;
}
var myArr = [1,3,5,-5,7,19,2,5];
console.log(printArr(myArr));

/*3 Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar. */

function printArr2(arr) {
    var penultimo = arr[arr.length-2];

    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0 ){
            impar = arr[i];
            break;
        }
    }
    console.log(penultimo);
    return impar;
}
var arr = [7,1,2,3,4,5];
console.log(printArr2(arr));

/*4 Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde 
cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] 
sin cambiar el array original.  */

function doble(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}
console.log(doble([1,2,3]));


/*5 Contar Positivos -  Dado un array de números, crea una función para reemplazar 
el último valor con el número de valores positivos encontrados en el array. 
Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3]. */

function contarPositivos(arr) {
    contador = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            contador +=1;
        }
    }
    arr[arr.length-1] = contador;
    return arr;
}
var arr = [-1,1,1,1];
console.log(contarPositivos(arr));

/*6 Pares e Impares - Crea una función que acepte un array. 
Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, 
y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”. */

function parImpares(arr) {
    contadorP = 0;
    contadorI = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            contadorP += 1;
            if(contadorP == 3){
                console.log("¡Es para bien!");
                contadorP=0;
                contadorI = 0;
            }
        }else{
            contadorI +=1;
            if(contadorI == 3){
                console.log("¡Qué imparcial!");
                contadorI = 0;
                contadorP = 0;
            }
        }
    }
}
var arr = [3,3,3,2,1,2,2,2];
console.log(parImpares(arr));

/*7 Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, 
específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr.  */

function inscrementaSegundos(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 !=0){
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}
console.log(inscrementaSegundos([1,2,3,4,5]));

/*8 Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
Pista: ¿For loops solo puede ir hacia adelante? */
function previousLengths(arr) {
    var newarr = [arr[0]]; 
    for (var i=0; i<arr.length; i++) {
      newarr.push(arr[i].length); 
    }
    return newarr;
  }
  console.log(previousLengths(["programar", "dojo", "genial"]));
  
  
/*9 Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.  */

function sumSiete(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}
console.log(sumSiete([1,2,3]));

/*10 Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) 
devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */

function reverseArray(arr) {
    var reversedArr = arr.reverse();
    return reversedArr;
  }
  console.log(reverseArray([3,1,6,4,2])); 
  
/*11 Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5]. */

function negativo(arr) {
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr[i] = -Math.abs(arr[i]);
    }
    return newArr;
}
console.log(negativo([1,-3,5])); 

/*12 Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de 
los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.  */

function hambriento(arr) {
    contador = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i] == "comida") {
            console.log("yummy");
            contador +=1;
        }
    }
    if(contador == 0){
        console.log("tengo hambre");
    }
}
hambriento([1,"comida",3,4,5,6]);

/*13 Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) 
cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.  */
function cambiaHaciaElCentro(arr) {
    var temp = arr[0];
    for (var i = 0, x = arr.length - 1; i < x; i++, x--) {
        if (i === 0 || i % 2 === 0) {
            temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
        } 
    }
    console.log(arr);
}
cambiaHaciaElCentro([1,2,3,4,5,6]); 

/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/
function escalaArray(arr, num) {
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(escalaArray([1,2,3],3));