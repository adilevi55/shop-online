import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateProductComponent } from '../component/add-update-product.component';

const routes: Routes = [
  {path:'', component:AddUpdateProductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUpdateProductRoutingModule { }
