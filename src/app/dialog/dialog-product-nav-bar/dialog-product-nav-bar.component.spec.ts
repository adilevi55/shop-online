import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductNavBarComponent } from './dialog-product-nav-bar.component';

describe('DialogProductNavBarComponent', () => {
  let component: DialogProductNavBarComponent;
  let fixture: ComponentFixture<DialogProductNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProductNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProductNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
