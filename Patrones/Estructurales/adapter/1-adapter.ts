interface Spain {
  enchufe(): number;
}

class ConnectionSpain implements Spain {
  enchufe(): number {
    return 220;
  }
}

class American {
  connection(v: number): string {
    return v.toString();
  }
}

class Adapter implements Spain {
  private adapter: American;

  constructor(adapter: American) {
    this.adapter = adapter;
  }

  enchufe(): any {
    return this.adapter.connection(110);
  }
}
const connectionAmerican = new American();
const connectionSpain = new ConnectionSpain();
const adapterTravel = new Adapter(connectionAmerican);

const result = adapterTravel.enchufe();
const result1 = connectionSpain.enchufe();

console.log(`Enchufe americano de ${result} lo pasamos a sistema español de`, result1);
