class Abstraction {

    protected implementation: Implementation;
    
    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }
    
    public operation(): string {
        const result = this.implementation.op();
        return `Abstraction: Base operation with:\n${result}`;
    }
}


class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.op();
        return `Abstracción extendida: Operación extendida con:\n${result}`;
    }
}


interface Implementation {
    op(): string;
}


class ConcreteImplementationA implements Implementation {
    public op(): string {

        return 'ConcreteImplementationA: Aquí está el resultado en la plataforma A';
    }
    
}

class ConcreteImplementationB implements Implementation {
    public op(): string {
        return 'ConcreteImplementationB: Aquí está el resultado en la plataforma B.';
    }
}


function clientCode(abstraction: Abstraction) {
    // ..
  
    console.log(abstraction.operation());

    // ..
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);