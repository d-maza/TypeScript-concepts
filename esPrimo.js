'use strict'


function isPrime(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime(70));
console.log(isPrime(23));



function isPrime1(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime1(70));
console.log(isPrime1(23));




const esPrimo2 = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
console.log(esPrimo2(7))
console.log(esPrimo2(4))
