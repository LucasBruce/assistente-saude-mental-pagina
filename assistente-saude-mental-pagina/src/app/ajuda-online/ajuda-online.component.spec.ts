import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaOnlineComponent } from './ajuda-online.component';

describe('AjudaOnlineComponent', () => {
  let component: AjudaOnlineComponent;
  let fixture: ComponentFixture<AjudaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudaOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
