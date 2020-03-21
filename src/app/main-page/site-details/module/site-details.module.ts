import { NgModule } from '@angular/core';
import { SiteDetailsComponent } from '../component/site-details.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { SiteDetailsRoutingModule } from './site-details-routing.module';
// tslint:disable-next-line: max-line-length
import { SiteDetailsShoppingCatNotificationComponent } from '../site-details-shopping-cat-notification/site-details-shopping-cat-notification.component';



@NgModule({
  declarations: [SiteDetailsComponent, SiteDetailsShoppingCatNotificationComponent],
  imports: [
    ShearModule,
    SiteDetailsRoutingModule
  ],
  exports: [SiteDetailsComponent]
})
export class SiteDetailsModule { }
