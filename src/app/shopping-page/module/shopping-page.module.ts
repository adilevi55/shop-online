import { NgModule } from '@angular/core';

import { ShoppingPageRoutingModule } from './shopping-page-routing.module';
import { ShoppingPageComponent } from '../component/shopping-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { ShoppingNavBarComponent } from 'src/app/shopping-nav-bar/shopping-nav-bar.component';


@NgModule({
  declarations: [
    ShoppingPageComponent,
    ShoppingNavBarComponent
  ],
  imports: [
    ShearModule,
    ShoppingPageRoutingModule
  ]
})
export class ShoppingPageModule { }
