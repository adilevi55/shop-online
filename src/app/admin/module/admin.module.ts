import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ShearModule } from '../../root/modules/shear.module';
import { AdminMainNavBarComponent } from '../admin-main-nav-bar/admin-main-nav-bar.component';
import { AdminDashboardMainPageModule } from '../admin-dashboard/admin-dashboard-main-page/module/admin-dashboard-main-page.module';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminMainNavBarComponent
  ],
  imports: [
    ShearModule,
    AdminRoutingModule,
    AdminDashboardMainPageModule
  ]
})
export class AdminModule { }
