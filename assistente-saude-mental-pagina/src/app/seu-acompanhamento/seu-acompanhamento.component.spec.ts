import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuAcompanhamentoComponent } from './seu-acompanhamento.component';

describe('SeuAcompanhamentoComponent', () => {
  let component: SeuAcompanhamentoComponent;
  let fixture: ComponentFixture<SeuAcompanhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeuAcompanhamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeuAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
