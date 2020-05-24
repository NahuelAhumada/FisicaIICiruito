class Elemento{
    constructor(valor,mallas){
        this.valor=valor;
        this.mallas=mallas;
    }
    getValor(){
        return this.valor;
    }
    getMallas(){
        return this.mallas;
    }
}
class Capacitor{
    constructor(carga, voltaje, capacitancia){
        this.carga=carga;
        this.voltaje=voltaje;
        this.capacitancia=capacitancia;
    }
}
class Resistencia extends Elemento{
    constructor(ohms,mallas){
        super(ohms,mallas);
    }
}
class Fem{
    constructor(voltaje, mallas){
        super(voltaje,mallas);
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
    constructor(numero){
        this.numero=numero;
        this.voltaje=0;
        this.i1=0;
        this.i2=0;
        this.i3=0;
    }
    asignarValorer(listaElementosDelCircuito){

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
                objetos.push(new Resistencia(listaDeDatos[i].value,[1]));
                break;
            case 'r2':
                objetos.push(new Resistencia(listaDeDatos[i].value,[2]));
                break;
            case 'r3':
                objetos.push(new Resistencia(listaDeDatos[i].value,[1,2]));
                break;
            case 'r4':
                objetos.push(new Resistencia(listaDeDatos[i].value,[1,3]));
                break;
            case 'r5':
                objetos.push(new Resistencia(listaDeDatos[i].value,[2,3]));
                break;
            case 'r6':
                objetos.push(new Resistencia(listaDeDatos[i].value,[3]));
                break;
            case 'v1':
                objetos.push(new Fem(listaDeDatos[i].value,[1]));
                break;
            case 'v2':
                objetos.push(new Fem(listaDeDatos[i].value,[2]));
                break;
            case 'v3':
                objetos.push(new Fem(listaDeDatos[i].value,[1,2]));
                break;
            case 'v4':
                objetos.push(new Fem(listaDeDatos[i].value,[1,3]));
                break;
            case 'v5':
                objetos.push(new Fem(listaDeDatos[i].value,[2,3]));
                break;
            case 'v6':
                objetos.push(new Fem(listaDeDatos[i].value,[3]));
                break;
            
        }
    }

    return objetos;
}
document.getElementById("elementos-circuito").addEventListener("submit",function(e){
    let listaDeDatos=document.querySelectorAll("input[class = 'form-control']");
    const objetosCirucuitos=crearListaDeElementos(listaDeDatos);
    const malla1=new Malla(1);
    const malla2=new Malla(2);
    const malla3=new Malla(3); 
    e.preventDefault();
});