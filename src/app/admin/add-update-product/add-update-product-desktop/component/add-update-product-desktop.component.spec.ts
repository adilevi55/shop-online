import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUpdateProductDesktopComponent } from './product';


describe(' AddUpdateProductDesktopComponent', () => {
  let component:  AddUpdateProductDesktopComponent;
  let fixture: ComponentFixture<  AddUpdateProductDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AddUpdateProductDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AddUpdateProductDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
