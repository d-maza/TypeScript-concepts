"use strict";
class Calculadora {
    constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.sumar = (this.numero1, this.numero2, (a, b) => a + b);
        this.restar = (this.numero1, this.numero2, (a, b) => a - b);
        this.dividir = (this.numero1, this.numero2, (a, b) => a / b);
        this.multiplicar = (this.numero1, this.numero2, (a, b) => a * b);
    }
}
let operacion = new Calculadora;
// Ejemplos de calcualos
console.log(operacion.sumar(3, 3));
console.log(operacion.dividir(3, 3));
