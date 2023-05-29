
class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
 
        const result = this.strategy.doAlgorithm(['D', 'a', 'v', 'i', 'd']);
        console.log(result);
    }
}


interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
    public nombre: string = 'David'
}


const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy A');
context.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy B');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();






