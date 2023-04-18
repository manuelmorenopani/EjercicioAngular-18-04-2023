import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Componente1HijoprocudtoComponent } from './componente1-hijoprocudto/componente1-hijoprocudto.component';
import { Componente1PadreprocudtoComponent } from './componente1-padreprocudto/componente1-padreprocudto.component';
import { Componente2HijopedidosComponent } from './componente2-hijopedidos/componente2-hijopedidos.component';
import { Componente2PadrepedidosComponent } from './componente2-padrepedidos/componente2-padrepedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1HijoprocudtoComponent,
    Componente1PadreprocudtoComponent,
    Componente2HijopedidosComponent,
    Componente2PadrepedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
