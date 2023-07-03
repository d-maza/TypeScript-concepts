export default class Password {
    private longitud: number;
    contraseña: string;
  
    constructor(longitud: number = 8) {
      this.longitud = longitud;
      this.contraseña = this.generarContraseña(longitud);
    }
  
    private generarContraseña(longitud: number): string {
      let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let contraseña = '';
      for (let i = 0; i < longitud; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      return contraseña;
    }
  }