import { tipoProducto } from "./tipoproducto";

export class listaproductos{
id:number = 0;
nombre:string = "";
cantidad:number = 0;
precio:number = 0;
tp:tipoProducto;

constructor(id:number,nombre:string,cantidad:number,precio:number,tp:tipoProducto){

this.tp=tp;
this.id=id;
this.nombre=nombre;
this.cantidad=cantidad;
this.precio=precio;


    }
}