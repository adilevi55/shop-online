import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardMainPageComponent } from '../component/admin-dashboard-main-page.component';


const routes: Routes = [
  {path: '', component: AdminDashboardMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardMainPageRoutingModule { }
