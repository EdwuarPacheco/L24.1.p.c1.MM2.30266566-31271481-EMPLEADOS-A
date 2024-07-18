/*En una empresa se tiene personal obrero y personal administrativo. 
La empresa necesita determinar cuál es alguno de los nombres del personal que gana menos 
(si no se repite, sólo reportar 1, si se repite, reportar cualquiera) y 
también el monto promedio pagado sólo los administrativos.
Al ser consultada por la forma como desean que se presente la salida, 
la empresa suministra el siguiente formato, informando que Juan (obrero) 
actualmente gana $100, Ana (obrero) gana $50, Lin (administrativo) gana $200, 
Mary (obrero) gana $50 y Carlos (administrativo) gana $150*/

import Cl_Empleado from "./empleado.js";
import Cl_Empresa from "./empresa.js";

let empleado1= new Cl_Empleado("Obrero", "Juan", 100);
let empleado2= new Cl_Empleado("Obrero", "Ana", 50);
let empleado3= new Cl_Empleado("Administrativo", "Lin", 200);
let empleado4= new Cl_Empleado("Obrero", "Mary", 50);
let empleado5= new Cl_Empleado("Administrativo", "Juan", 150);

let empresa= new Cl_Empresa()
empresa.procesar(empleado1);
empresa.procesar(empleado2);
empresa.procesar(empleado3);
empresa.procesar(empleado4);
empresa.procesar(empleado5);

let salida = document.getElementById("salida")
salida.innerHTML+= "Uno de los que gana menos: " +empresa.devolverAux();
salida.innerHTML+= "<br> Monto promedio pagado a administrativos: "+"$" +empresa.promedioMontAdmi();