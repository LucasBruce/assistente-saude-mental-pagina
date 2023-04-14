import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveMandamentosSaudeMentalComponent } from './nove-mandamentos-saude-mental.component';

describe('NoveMandamentosSaudeMentalComponent', () => {
  let component: NoveMandamentosSaudeMentalComponent;
  let fixture: ComponentFixture<NoveMandamentosSaudeMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoveMandamentosSaudeMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoveMandamentosSaudeMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
