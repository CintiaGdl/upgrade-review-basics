/* 
Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.
Sugerencia de array:
*/

let names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, item1, item2) {
    const positionItem1 = array.indexOf(item1);
    const positionItem2 = array.indexOf(item2);

    array.splice(positionItem1,1,item2);
    array.splice(positionItem2,1,item1);

    return array
}

console.log(swap(names, 'Mesirve', 'Fernando Muralla'));