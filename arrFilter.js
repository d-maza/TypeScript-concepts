let arr = [1,2,3,4,5]

let num = 3


// Si todos los elementos del array son iguales al numero que estoy buscando
let result = arr.filter(elem => elem !== num )
console.log(result)

// Si todos los elementos del array son diferentes al numero que estoy buscando
result = arr.every(elem => elem !== num)
console.log(result);

// Si alguno de los elementos del array es igual al numero que estoy buscando
result = arr.includes(num)
console.log(result);

// Si alguno de los elementos del array es diferente al numero que estoy buscando
result = arr.some(elem => elem !== num)
console.log(result);


// Sumar todos los elementos de un array
result = arr.reduce((acc,elem) => acc + elem)
console.log(result)


// Multiplicar todos los elementos de un array
result = arr.map(elem => elem  *2  )
console.log(result)

// Buscar un elemento dentro de un array
result = arr.find(elem => elem === num )
console.log(result)

// Buscar un elemento dentro de un array y devolver su indice
result = arr.findIndex(elem => elem === num)
console.log(result);

// Imprimir todos los elementos de un array
arr.forEach(elem => console.log(elem))

let arr2 = ['a', 'b', 'c', 'd']

const arr3 =arr.concat(...arr2)
console.log(arr3);