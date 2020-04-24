import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AuthGuardAdmin } from '../../services/authentication/auth-admin.guard';


const routes: Routes = [
  {path:'', component:AdminLoginComponent},
  {path:'dashboard',
  component:AdminDashboardComponent, canActivate: [AuthGuardAdmin],children: [
    {path: 'add-update-product', 
    loadChildren: () => import('../add-update-product/add-update-product/module/add-update-product.module')
    .then(m => m.AddUpdateProductModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
