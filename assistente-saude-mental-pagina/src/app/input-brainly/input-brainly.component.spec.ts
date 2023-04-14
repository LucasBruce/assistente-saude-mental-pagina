import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBrainlyComponent } from './input-brainly.component';

describe('InputBrainlyComponent', () => {
  let component: InputBrainlyComponent;
  let fixture: ComponentFixture<InputBrainlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBrainlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBrainlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
