export class listapedidos{
    idpedido:number = 0;
    idcliente:number = 0;
    nombre:string = "";
    totalproductos:number = 0;
    importetotal:number = 0;


    constructor(idpedido:number,idcliente:number,nombre:string,totalproductos:number,importetotal:number){
    
    this.idpedido=idpedido;
    this.idcliente=idcliente;
    this.nombre=nombre;
    this.totalproductos=totalproductos;
    this.importetotal=importetotal;
}
}