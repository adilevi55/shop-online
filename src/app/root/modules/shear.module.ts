import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ShoppingCartTemplateComponent } from 'src/app/shopping-cart-template/shopping-cart-template.component';
import { ProductTemplateModule } from 'src/app/product-template/module/product-template.module';


@NgModule({
  declarations: [ShoppingCartTemplateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ProductTemplateModule,
    ShoppingCartTemplateComponent
    
  ]
})
export class ShearModule { }
