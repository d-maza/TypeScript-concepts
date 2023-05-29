function esPrimo(numero: number) { 
    if (numero <= 1) { 
        return false; 
    } 
    // Comprobamos si el número es divisible por algún número menor que él mismo 
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) { 
            return false; 
        } 
    } // Si no ha sido divisible por ningún número, es primo return true; 
}

console.log(esPrimo(7))
console.log(esPrimo(5))
