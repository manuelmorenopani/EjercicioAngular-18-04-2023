import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2HijopedidosComponent } from './componente2-hijopedidos.component';

describe('Componente2HijopedidosComponent', () => {
  let component: Componente2HijopedidosComponent;
  let fixture: ComponentFixture<Componente2HijopedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2HijopedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2HijopedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
