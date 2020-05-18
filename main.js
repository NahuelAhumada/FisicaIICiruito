class Capacitor{
    constructor(carga, voltaje, capacitancia){
        this.carga=carga;
        this.voltaje=voltaje;
        this.capacitancia=capacitancia;
    }
}
class Resistencia{
    constructor(ohms){
        this.ohms=ohms;
    }
}
class Fem{
    constructor(voltaje){
        this.voltaje=voltaje;
    }
}
class Corriente{
    constructor(Resistencia,Capacitor,Fem){
        this.Resistencia=Resistencia;
        this.Capacitor=Capacitor;
        this.Fem=Fem;
    }
}

function cramer(){

}

