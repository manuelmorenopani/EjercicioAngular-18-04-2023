import { Component,Output,EventEmitter } from '@angular/core';
import { listapedidos } from  '../modelos/listapedidos';
@Component({
  selector: 'app-componente2-hijopedidos',
  templateUrl: './componente2-hijopedidos.component.html',
  styleUrls: ['./componente2-hijopedidos.component.css']
})
export class Componente2HijopedidosComponent {
  idpedido : number = 0
  idcliente : number = 0
  nombre : string= ""
  totalproductos: number = 0
  importetotal : number = 0
  pedidos : listapedidos[] = []
  
  @Output() enviardatos = new EventEmitter <listapedidos []>()
  ngOnInit(){

  }
  anadir(){
    this.pedidos.push(new listapedidos(this.idpedido, this.idcliente, this.nombre, this.totalproductos, this.importetotal))
    this.enviardatos.emit(this.pedidos)
  }

}



