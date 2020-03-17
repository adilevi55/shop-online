import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDetailsShoppingCatNotificationComponent } from './site-details-shopping-cat-notification.component';

describe('SiteDetailsShoppingCatNotificationComponent', () => {
  let component: SiteDetailsShoppingCatNotificationComponent;
  let fixture: ComponentFixture<SiteDetailsShoppingCatNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDetailsShoppingCatNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDetailsShoppingCatNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
