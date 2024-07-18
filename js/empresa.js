export default class Cl_Empresa{
    constructor(){
        this.acumMontAdmi= 0;
        this.contEmpleAdmi=0;
        this.menor= 1000;
        this.auxNombre = "";

    }
    procesar(em){

        //contamos administrativos
        if(em.tipo == "Administrativo"){
            this.contEmpleAdmi++;
            this.acumMontAdmi+=em.pago;
        }
        //vemos quien fue el que gano menos
        if(em.pago <this.menor){
            this.menor= em.pago;
            this.auxNombre= em.nombre;
        }
    }
    promedioMontAdmi(){
        return this.acumMontAdmi/this.contEmpleAdmi;
    }
    devolverAux(){
        return this.auxNombre;
    }
}