/**
  * La clase de ejemplo que tiene capacidad de clonación. Veremos como los valores de campo
  * con diferentes tipos serán clonados.
  */
class Prototype {

    public primitive: any;
    public component: object = {};
    public circularReference: ComponentWithBackReference | undefined;



    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Clonar un objeto que tiene un objeto anidado con referencia inversa
        // requiere un tratamiento especial. Una vez finalizada la clonación, el
        // el objeto anidado debe apuntar al objeto clonado, en lugar del
        // objeto original. El operador de propagación puede ser útil para este caso.

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

/**
 * The client code.
 */
export function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Los valores de campo primitivos se han trasladado a un clon. Hurra!');
    } else {
        console.log('Los valores de campo primitivos no se han copiado. ¡Buu!');
    }
    if (p1.component === p2.component) {
        console.log('El componente simple no ha sido clonado. Buuu!');
    } else {
        console.log('El componente simple ha sido clonado. Hurra!');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('El componente con referencia anterior no se ha clonado. Buuu!');
    } else {
        console.log('El componente con referencia anterior ha sido clonado. Hurra');
    }

    if (p1.circularReference.prototype === p2.circularReference?.prototype) {
        console.log('El componente con referencia posterior está vinculado al objeto original. Buu!');
    } else {
        console.log('El componente con referencia posterior está vinculado al clon. ¡Hurra!');
    }
}

clientCode();