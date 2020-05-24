class Capacitor{
    constructor(carga, voltaje, capacitancia){
        this.carga=carga;
        this.voltaje=voltaje;
        this.capacitancia=capacitancia;
    }
}
class Resistencia{
    constructor(ohms,mallas){
        this.ohms=ohms;
        this.mallas=mallas;
    }
}
class Fem{
    constructor(voltaje, mallas){
        this.voltaje=voltaje;
        this.mallas=mallas;
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
function crearListaDeElementos(listaDeDatos){
    const objetos=[];
    for(let i=0;i<listaDeDatos.length;i++){
        let tipoDeDato=listaDeDatos[i].id;
        switch(tipoDeDato){
            case 'r1':
                break;
            case 'r2':
                break;
            case 'r3':
                break;
            case 'r4':
                break;
            case 'r5':
                break;
            case 'r6':
                break;
            case 'v1':
                break;
            case 'v2':
                break;
            case 'v3':
                break;
            case 'v4':
                break;
            case 'v5':
                break;
            case 'v6':
                break;
            
        }
    }
}
document.getElementById("elementos-circuito").addEventListener("submit",function(e){
    let listaDeDatos=document.querySelectorAll("input[class = 'form-control']");
    console.log(listaDeDatos);
    e.preventDefault();
});