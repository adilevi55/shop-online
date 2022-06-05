import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardMainPageComponent } from './admin-dashboard-main-page.component';

describe('AdminDashboardMainPageComponent', () => {
  let component: AdminDashboardMainPageComponent;
  let fixture: ComponentFixture<AdminDashboardMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
