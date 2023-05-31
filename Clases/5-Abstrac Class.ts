abstract class Mee {
    name: string
    constructor(){
    this.name = 'Berta'
    }
}

abstract class Mee2 {
    name: string
    constructor(){
    this.name = 'David'
    }
}


class Mee3 extends Mee2  { // Solo se puede extender de una sola clase

}

class Mee5 extends Mee2  { 
    /**
     * sayThis
     */
    public sayThis() {
        console.log(this.name)
    }
}

class Mee4 implements Mee , Mee2  {
    name: string = 'David'
}

const newMee5 = new Mee5
newMee5.sayThis()