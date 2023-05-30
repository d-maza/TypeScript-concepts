class Calculadora {

    private numero1: number=0
    private numero2: number=0

    constructor( ){}

    sumar = (this.numero1 , this.numero2, (a:number, b:number):number => a + b)
    restar = (this.numero1 , this.numero2, (a:number, b:number):number =>  a - b)
    dividir = (this.numero1 , this.numero2, (a:number, b:number):number => a / b)
    multiplicar = (this.numero1 , this.numero2, (a:number, b:number):number => a * b)

}

let operacion = new Calculadora

// Ejemplos de calcualos
console.log(operacion.sumar(3,3)) 
console.log(operacion.dividir(3,3))