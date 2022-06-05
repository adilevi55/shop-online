import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPhoneComponent } from './admin-dashboard-phone.component';

describe('AdminDashboardPhoneComponent', () => {
  let component: AdminDashboardPhoneComponent;
  let fixture: ComponentFixture<AdminDashboardPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
