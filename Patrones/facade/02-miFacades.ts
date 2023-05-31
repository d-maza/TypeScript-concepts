
class Facade {

    protected colorear: Pintar;
    protected limpiar: Limpiar;


    constructor(colorear?: Pintar, limpiar?: Limpiar) {
        this.colorear = colorear || new Pintar();
        this.limpiar = limpiar || new Limpiar();
    }


    public ope(): string {
        let result = 'Fachada inicializa subsistemas:\n';
        result += this.colorear.opBlue();
        result += this.limpiar.opeFregar();
        result += 'Fachada ordena subsistemas para realizar la acción:\n';
        result += this.colorear.opRed();
        result += this.limpiar.opBarrer();

        return result;
    }
}


class Pintar {
    public opBlue(): string {
        return 'Pintando en Azul!\n';
    }

    // ...

    public opRed(): string {
        return 'Pintado en Rojo!\n';
    }
}


class Limpiar {
    public opBarrer(): string {
        return 'Estas Barriendo!\n';
    }

    // ...

    public opeFregar(): string {
        return 'Estas Fregando!\n';
    }
}

export function clientCode(facade: Facade) {
    // ...

    console.log(facade.ope());

    // ...
}


const subsystem1 = new Pintar();
const subsystem2 = new Limpiar();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade)