import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderSuccessComponent } from './dialog-order-success.component';

describe('DialogOrderSuccessComponent', () => {
  let component: DialogOrderSuccessComponent;
  let fixture: ComponentFixture<DialogOrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOrderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
