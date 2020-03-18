import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTemplateComponent } from './shopping-cart-template.component';

describe('ShoppingCartTemplateComponent', () => {
  let component: ShoppingCartTemplateComponent;
  let fixture: ComponentFixture<ShoppingCartTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
