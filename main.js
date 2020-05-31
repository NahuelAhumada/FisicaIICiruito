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
    let c1=document.querySelectorAll('.carga-c1').checked;
    let c2=document.querySelectorAll('.carga-c2').checked;
    let c3=document.querySelectorAll('.carga-c3').checked;
    let c4=document.querySelectorAll('.carga-c4').checked;
    let c5=document.querySelectorAll('.carga-c5').checked;
    let c6=document.querySelectorAll('.carga-c6').checked;
    objetos.push(new Rama(listaDeDatos[0].value,listaDeDatos[6].value,c1));
    objetos.push(new Rama(listaDeDatos[1].value,listaDeDatos[7].value,c2));
    objetos.push(new Rama(listaDeDatos[2].value,listaDeDatos[8].value,c3));
    objetos.push(new Rama(listaDeDatos[3].value,listaDeDatos[9].value,c4));
    objetos.push(new Rama(listaDeDatos[4].value,listaDeDatos[10].value,c5));
    objetos.push(new Rama(listaDeDatos[5].value,listaDeDatos[11].value,c6));
    

    return objetos;
}
document.getElementById("elementos-circuito").addEventListener("submit",function(e){
    let listaDeDatos=document.querySelectorAll("input[class = 'form-control']");
    const objetosCirucuitos=crearListaDeElementos(listaDeDatos); 
    e.preventDefault();
});