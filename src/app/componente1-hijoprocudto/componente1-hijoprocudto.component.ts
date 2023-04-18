import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente1-hijoprocudto',
  templateUrl: './componente1-hijoprocudto.component.html',
  styleUrls: ['./componente1-hijoprocudto.component.css']
})
export class Componente1HijoprocudtoComponent {
  @Input() alimentos: any = [];
}


