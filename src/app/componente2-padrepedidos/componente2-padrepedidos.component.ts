import { Component,EventEmitter } from '@angular/core';
import { listapedidos } from  '../modelos/listapedidos';

@Component({
  selector: 'app-componente2-padrepedidos',
  templateUrl: './componente2-padrepedidos.component.html',
  styleUrls: ['./componente2-padrepedidos.component.css']
})
export class Componente2PadrepedidosComponent {
  pedidos:listapedidos[] = [];  

  constructor(){
  }

  ngOnInit(): void{

  }
  anadirpedido(pedido:any){
      this.pedidos=pedido

  }
}


