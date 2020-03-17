import { NgModule } from '@angular/core';

import { ShoppingPageRoutingModule } from './shopping-page-routing.module';
import { ShoppingPageComponent } from '../component/shopping-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { ShoppingNavBarComponent } from 'src/app/shopping-nav-bar/shopping-nav-bar.component';
import { ShoppingCartModule } from 'src/app/shopping-cart/module/shopping-cart.module';
import { ProductsPageModule } from 'src/app/products-page/module/products-page.module';


@NgModule({
  declarations: [
    ShoppingPageComponent,
    ShoppingNavBarComponent
  ],
  imports: [
    ShearModule,
    ShoppingPageRoutingModule,
    ShoppingCartModule,
    ProductsPageModule
  ]
})
export class ShoppingPageModule { }
