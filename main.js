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
class Malla{
    listaCorrientes=new Array();
    agregarCorriente(corriente){
        this.listaCorrientes.push(corriente);
    }
}

function cramer(lista){
    if(lista.length==3){

    }

}
/* resistencia=new Resistencia(15);
capacitor=new Capacitor(15,12,3);
fem=new Fem(8);
i=new Corriente(resistencia,capacitor,fem);
console.log(i.Resistencia.ohms);
resistencia.ohms=7;
console.log(i.Resistencia.ohms);
 */
document.getElementById("elementos-circuito").addEventListener("submit",function(e){
    
});