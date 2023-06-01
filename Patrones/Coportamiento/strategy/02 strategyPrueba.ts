interface ISeleccion {
    modo(candidato:string):string
}

class OnlineStrategy implements ISeleccion {
    modo(candidato: string): string {
        return `${candidato} tiene la entrevista Online`
    }
}
class PresencialStrategy implements ISeleccion {
    modo(candidato: string): string {
        return `${candidato} tiene la entrevista Presencial`
    }
}
class ProcesoSelecion {

    private entrevista : ISeleccion

    constructor( entrevista : ISeleccion){
        this.entrevista = entrevista
    }

    setEntrevista(entrevista : ISeleccion){
        this.entrevista = entrevista
    }

    comunicarEntrevista(canditato:string){
       const modo = this.entrevista.modo(canditato)
        console.log(modo)
    }
}

const primeraSelecion = new ProcesoSelecion(new PresencialStrategy())
primeraSelecion.comunicarEntrevista('David')

const segundaSelecion = new ProcesoSelecion(new OnlineStrategy())
segundaSelecion.comunicarEntrevista('Lucas')
