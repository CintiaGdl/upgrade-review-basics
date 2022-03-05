/* 
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve 
la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
Haz varios ejemplos y compruebalos.
Sugerencia de función:
*/
function findArrayIndex(array, text) {
    return array.indexOf(text); 
}

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

console.log(findArrayIndex(animals, 'Salamandra'));

console.log(findArrayIndex(animals, 'Ajolote'));

const names = ['Lucas', 'Diego', 'Victoria', 'Ándres']


console.log(findArrayIndex(names,'Lucas'));