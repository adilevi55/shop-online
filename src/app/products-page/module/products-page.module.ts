import { NgModule } from '@angular/core';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from '../component/products-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { ProductNavBarComponent } from 'src/app/product-nav-bar/product-nav-bar.component';
import { SearchProductComponent } from 'src/app/search-product/search-product.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductNavBarComponent,
    SearchProductComponent
  ],
  imports: [
    ShearModule,
    ProductsPageRoutingModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsPageModule { }
