import { NgModule } from '@angular/core';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from '../component/shopping-cart.component';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    ShearModule,
    ShoppingCartRoutingModule
  ],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
