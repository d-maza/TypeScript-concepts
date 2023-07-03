interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify():void
}

interface IObserver {
    update():void
}

class Subject implements ISubject {

    observers:Observer[] = [];


    subscribe(observer:Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
         return  element.id !== observer.id
        })
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update()
            console.log(this.observers) 
        })
    }
}

class Observer implements IObserver {

    constructor(public  readonly id:number) {}

    update() {
       console.log(`Observer ${this.id} update..`)
    }
}

const observer = new Observer(1);
const observer2 = new Observer(2);

const subject = new Subject();

console.log('**'.repeat(44))
console.log('Me suscribo..')
subject.subscribe(observer);
subject.notify()

console.log('**'.repeat(44))
console.log('Me desuscribo..')
subject.unsubscribe(observer)
console.log(subject.observers)

console.log('**'.repeat(44))
console.log('Nos Suscribimos..')
subject.subscribe(observer2)
subject.subscribe(observer)
console.log(subject.observers)

console.log('**'.repeat(44))
console.log('El 1 se desuscribe..')
subject.unsubscribe(observer)
subject.notify();
console.log('**'.repeat(44))