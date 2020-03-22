import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTemplateComponent } from '../component/product-template.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTemplateRoutingModule { }
