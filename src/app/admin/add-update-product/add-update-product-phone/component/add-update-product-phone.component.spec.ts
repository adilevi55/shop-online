import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AddUpdateProductPhoneComponent } from './add-update-product-phone.component';

describe('AddUpdateProdcutPhoneComponent', () => {
  let component:  AddUpdateProductPhoneComponent;
  let fixture: ComponentFixture< AddUpdateProductPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AddUpdateProductPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AddUpdateProductPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
