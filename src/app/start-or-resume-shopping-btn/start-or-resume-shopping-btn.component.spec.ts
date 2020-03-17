import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOrResumeShoppingBtnComponent } from './start-or-resume-shopping-btn.component';

describe('StartOrResumeShoppingBtnComponent', () => {
  let component: StartOrResumeShoppingBtnComponent;
  let fixture: ComponentFixture<StartOrResumeShoppingBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartOrResumeShoppingBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartOrResumeShoppingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
