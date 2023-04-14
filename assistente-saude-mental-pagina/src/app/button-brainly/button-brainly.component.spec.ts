import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBrainlyComponent } from './button-brainly.component';

describe('ButtonBrainlyComponent', () => {
  let component: ButtonBrainlyComponent;
  let fixture: ComponentFixture<ButtonBrainlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBrainlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBrainlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
