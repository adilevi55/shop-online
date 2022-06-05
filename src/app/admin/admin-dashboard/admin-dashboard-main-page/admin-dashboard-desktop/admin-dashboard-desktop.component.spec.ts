import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDesktopComponent } from './admin-dashboard-desktop.component';

describe('AdminDashboardDesktopComponent', () => {
  let component: AdminDashboardDesktopComponent;
  let fixture: ComponentFixture<AdminDashboardDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
