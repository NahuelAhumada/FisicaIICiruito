class Rama{
    constructor(resistencia,fem,capacitorDescargado){
        this.resistencia=resistencia;
        this.capacitorDescargado=capacitorDescargado;
        this.fem=fem;
    }
    asignarListaDeMallas(lista){
        this.listaDeMallas=lista;
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
        for(let i =0; i<listaElementosDelCircuito.length;i++){
            dato=listaElementosDelCircuito[i];
            if(dato.listaMallas===[this.numero]){
                this.voltaje+=dato.fem;
            }
        }
    }
}

function cramer(lista){
    if(lista.length==4){

    }

}
casos=new Array();
//3 mallas
casos[0]=[[true,true,true,true,true,true]];
//2 mallas
casos[1]=[[false,true,true,true,true,true]];
casos[2]=[[true,false,true,true,true,true]];
casos[3]=[[true,true,false,true,true,true]];
casos[4]=[[true,true,true,false,true,true]];
casos[5]=[[true,true,true,true,false,true]];
casos[6]=[[true,true,true,true,true,false]];
//1 malla
casos[7]=[[true,true,false,true,true,false]];
casos[8]=[[true,true,false,false,true,true],[true,true,false,true,false,true],[true,true,false,false,false,true]];
casos[9]=[[true,true,true,true,false,false],[true,false,true,true,false,true],[true,false,true,true,true,false],[true,false,true,true,false,false]];
casos[10]=[[true,true,true,false,true,false],[false,true,true,true,true,false],[false,true,true,false,true,true],[false,true,true,false,true,false]];
casos[11]=[[false,true,true,true,false,true]];
casos[12]=[[true,false,true,false,true,true]];

function determinarCaso(capacitores){
    
}



function crearListaDeElementos(resistencias, voltajes, capacitoresBoolean){
    const objetos=[];
    for (let i=0;i<resistencias;i++){
        let res=resistencias[i].value;
        let fem=voltajes[i].value;
    }
    objetos.push(new Rama(listaDeDatos[0].value,listaDeDatos[6].value,c1));
    objetos.push(new Rama(listaDeDatos[1].value,listaDeDatos[7].value,c2));
    objetos.push(new Rama(listaDeDatos[2].value,listaDeDatos[8].value,c3));
    objetos.push(new Rama(listaDeDatos[3].value,listaDeDatos[9].value,c4));
    objetos.push(new Rama(listaDeDatos[4].value,listaDeDatos[10].value,c5));
    objetos.push(new Rama(listaDeDatos[5].value,listaDeDatos[11].value,c6));
    //definirCaso();...

    return objetos;
}
document.getElementById("elementos-circuito").addEventListener("submit",function(e){
    let resistencias=document.querySelectorAll(".resistencia");
    let voltajes=document.querySelectorAll(".voltaje");
    let capacitoresDescargados=document.querySelectorAll(".cap-descargado");
    let capacitoresBoolean= new Array();
    for (let i=0;i<capacitoresDescargados;i++){
        capacitoresBoolean.push(capacitoresDescargados[i].checked);
    }
    const objetosCirucuitos=crearListaDeElementos(resistencias, voltajes, capacitoresBoolean);
    e.preventDefault();
});