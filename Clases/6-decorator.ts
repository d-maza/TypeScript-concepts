function saludar(target: Function) {
    target.prototype.saludar = function () {
        console.log('Hola clase')
    }
    
    target.prototype.creater = function (entity:string) {
        target.prototype.skills.push(entity)
    }

    target.prototype.skills = []

    target.prototype.despedirme = () => console.log('Adios Clase')

}

@saludar
export class ClaseTest {

    [key: string]: any

    saludar() {
        console.log('Hola mundo')
     }
}

let miClase = new ClaseTest();

miClase.saludar()

miClase.creater('Java')
miClase.despedirme()

console.log(miClase.user)
