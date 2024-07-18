export default class Cl_Empleado{
    constructor(t,n,p){
        this.tipo=t;
        this.nombre=n;
        this.pago=p;
    }
    set tipo(t){
        this._tipo = t;
    }
    get tipo(){
        return this._tipo;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set pago(p){
        this._pago = p;
    }
    get pago(){
        return this._pago;
    }
}