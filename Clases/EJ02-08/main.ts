/*POO en Java - Ejerecicio2 Haz una clase llamada Password que siga las siguientes condiciones:

Que tenga los atributos longitud y contraseña. Por defecto, la longitud será de 8.
Los constructores serán los siguientes:
[X] Un constructor por defecto. 
[X] Un constructor con la longitud que nosotros le pasamos.
[X] Gererara una contraseña aleatoria con esa longitud.*/

import Password from "./Password";

const pass1 = new Password()
console.log(pass1.contraseña);

const pass2= new Password(42)
console.log(pass2.contraseña);
