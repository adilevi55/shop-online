import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainNavBarComponent } from './admin-main-nav-bar.component';

describe('AdminMainNavBarComponent', () => {
  let component: AdminMainNavBarComponent;
  let fixture: ComponentFixture<AdminMainNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
