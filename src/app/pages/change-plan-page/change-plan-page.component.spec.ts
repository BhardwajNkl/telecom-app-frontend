import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlanPageComponent } from './change-plan-page.component';

describe('ChangePlanPageComponent', () => {
  let component: ChangePlanPageComponent;
  let fixture: ComponentFixture<ChangePlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePlanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
