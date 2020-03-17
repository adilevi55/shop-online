import { NgModule } from '@angular/core';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from '../component/products-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    ShearModule,
    ProductsPageRoutingModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsPageModule { }
