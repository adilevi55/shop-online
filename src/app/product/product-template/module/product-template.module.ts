import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ProductTemplateComponent } from '../component/product-template.component';



@NgModule({
  declarations: [ProductTemplateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [ProductTemplateComponent]
})
export class ProductTemplateModule { }
