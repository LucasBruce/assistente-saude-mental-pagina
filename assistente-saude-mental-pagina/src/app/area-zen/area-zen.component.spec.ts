import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaZenComponent } from './area-zen.component';

describe('AreaZenComponent', () => {
  let component: AreaZenComponent;
  let fixture: ComponentFixture<AreaZenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaZenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaZenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
