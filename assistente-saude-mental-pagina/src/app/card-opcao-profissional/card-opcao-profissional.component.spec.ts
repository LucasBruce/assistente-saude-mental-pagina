import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpcaoProfissionalComponent } from './card-opcao-profissional.component';

describe('CardOpcaoProfissionalComponent', () => {
  let component: CardOpcaoProfissionalComponent;
  let fixture: ComponentFixture<CardOpcaoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOpcaoProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOpcaoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
