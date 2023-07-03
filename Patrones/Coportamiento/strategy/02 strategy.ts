interface ISeleccion {
    interview(candidato:string):string
}

class OnlineStrategy implements ISeleccion {
    interview(candidato: string): string {
        return `${candidato} tiene la entrevista Online`
    }
}
class PresencialStrategy implements ISeleccion {
    interview(candidato: string): string {
        return `${candidato} tiene la entrevista Presencial`
    }
}
class ProcesoSeleccion {

    private entrevista : ISeleccion

    constructor( entrevista : ISeleccion){
        this.entrevista = entrevista
    }

    comunicarEntrevista(canditato:string){
       const modo = this.entrevista.interview(canditato)
        console.log(modo)
    }
}

const primeraSeleccion = new ProcesoSeleccion(new PresencialStrategy())
primeraSeleccion.comunicarEntrevista('David')

const segundaSeleccion = new ProcesoSeleccion(new OnlineStrategy())
segundaSeleccion.comunicarEntrevista('Lucas')
