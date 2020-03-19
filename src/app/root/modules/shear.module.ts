import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ShoppingCartTemplateComponent } from 'src/app/shopping-cart-template/shopping-cart-template.component';
import { ProductTemplateModule } from 'src/app/product-template/module/product-template.module';
import { ProductNavBarComponent } from 'src/app/product-nav-bar/product-nav-bar.component';
import { SearchProductComponent } from 'src/app/search-product/search-product.component';


@NgModule({
  declarations: [
    ShoppingCartTemplateComponent,
    ProductNavBarComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ProductTemplateModule,
    ShoppingCartTemplateComponent,
    ProductNavBarComponent,
    SearchProductComponent
    
  ]
})
export class ShearModule { }
