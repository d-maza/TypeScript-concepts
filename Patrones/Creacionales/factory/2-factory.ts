interface DeveloperFactory {
  createDev(): Dev;
}

interface Dev {
  logic(): any;
}

class Framework implements DeveloperFactory {
  developer: Dev;
  constructor(developer: Dev) {
    this.developer = developer;
  }
  createDev(): Dev {
    return this.developer.logic();
  }
}

class Angular implements Dev {
  logic(): string {
    return "Developer expert Angular\n";
  }
}
class Vue implements Dev {
  logic(): string {
    return "Developer expert Vue\n";
  }
}
class React implements Dev {
  logic(): string {
    return "Developer expert React\n";
  }
}

function devCreator(devCreator: DeveloperFactory) {
  console.log(devCreator.createDev());
}

devCreator(new Framework(new Angular()));
devCreator(new Framework(new Vue()));
devCreator(new Framework(new React()));
