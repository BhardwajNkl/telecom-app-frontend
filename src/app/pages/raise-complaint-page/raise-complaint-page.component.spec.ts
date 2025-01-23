import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseComplaintPageComponent } from './raise-complaint-page.component';

describe('RaiseComplaintPageComponent', () => {
  let component: RaiseComplaintPageComponent;
  let fixture: ComponentFixture<RaiseComplaintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseComplaintPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseComplaintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
