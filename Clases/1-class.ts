/* Ejemplo: como implementer una libreria de treceros a tus clases */

import express from 'express';

const app = express()

class useExpress {

   router(uri: string,send:string) {
      app.get(uri, function (req ,res){
        res.send(send)
      })
  }
}

const useApp = new useExpress()

useApp.router('/','Lo has conseguido')
useApp.router('/David','Seras un gran Developer')

const port = 3000

app.listen(port, () => {
    console.log(`server at listen in http//localhost:${port}`)
})
