import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from '../component/order.component';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    ShearModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
