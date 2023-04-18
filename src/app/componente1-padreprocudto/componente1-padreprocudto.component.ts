import { Component, Input } from '@angular/core';
import { listaproductos } from  '../modelos/listaproductos';
import { tipoProducto } from '../modelos/tipoproducto';
@Component({
  selector: 'app-componente1-padreprocudto',
  templateUrl: './componente1-padreprocudto.component.html',
  styleUrls: ['./componente1-padreprocudto.component.css']
})
export class Componente1PadreprocudtoComponent {

  producto=new listaproductos(0,"",0,0,tipoProducto.alimentos)
  productos:listaproductos[] = []; 
  tp:string=""
  

  anadir(){
    this.producto.tp = tipoProducto[this.tp as keyof typeof tipoProducto]
    this.productos.push(this.producto)
    this.producto=new listaproductos(0,"",0,0,tipoProducto.alimentos)

  }
}
