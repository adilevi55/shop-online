import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavBarComponent } from '../component/main-nav-bar.component';


const routes: Routes = [
  {path: '', component: MainNavBarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavBarModuleRoutingModule { }
