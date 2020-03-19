import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
