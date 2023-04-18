import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2PadrepedidosComponent } from './componente2-padrepedidos.component';

describe('Componente2PadrepedidosComponent', () => {
  let component: Componente2PadrepedidosComponent;
  let fixture: ComponentFixture<Componente2PadrepedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2PadrepedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2PadrepedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
