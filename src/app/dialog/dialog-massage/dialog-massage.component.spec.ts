import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMassageComponent } from './dialog-massage.component';

describe('DialogMassageComponent', () => {
  let component: DialogMassageComponent;
  let fixture: ComponentFixture<DialogMassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
