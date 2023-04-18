import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1PadreprocudtoComponent } from './componente1-padreprocudto.component';

describe('Componente1PadreprocudtoComponent', () => {
  let component: Componente1PadreprocudtoComponent;
  let fixture: ComponentFixture<Componente1PadreprocudtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1PadreprocudtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1PadreprocudtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
