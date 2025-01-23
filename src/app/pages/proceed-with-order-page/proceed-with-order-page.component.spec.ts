import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedWithOrderPageComponent } from './proceed-with-order-page.component';

describe('ProceedWithOrderPageComponent', () => {
  let component: ProceedWithOrderPageComponent;
  let fixture: ComponentFixture<ProceedWithOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedWithOrderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedWithOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
