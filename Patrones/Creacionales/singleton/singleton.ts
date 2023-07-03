class Singleton {

    private static instance: Singleton;

    private constructor() {
        //init
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    logicalCode() {
        // logic code ..
        console.log("logic code");
    
    }
}

// const singleton1 = new Singleton(); // throw error: Cannot create an instance of Singleton.;

const singleton = Singleton.getInstance();
singleton.logicalCode()


