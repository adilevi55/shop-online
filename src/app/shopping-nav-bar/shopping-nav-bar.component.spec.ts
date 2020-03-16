import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingNavBarComponent } from './shopping-nav-bar.component';

describe('ShoppingNavBarComponent', () => {
  let component: ShoppingNavBarComponent;
  let fixture: ComponentFixture<ShoppingNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
