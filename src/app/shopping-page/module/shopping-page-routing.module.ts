import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingPageComponent } from '../component/shopping-page.component';


const routes: Routes = [
  {path: '', component: ShoppingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingPageRoutingModule { }
