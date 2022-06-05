import { NgModule } from '@angular/core';

import { AdminDashboardMainPageRoutingModule } from './admin-dashboard-main-page-routing.module';
import { AdminDashboardMainPageComponent } from '../component/admin-dashboard-main-page.component';
import { AdminDashboardDesktopComponent } from '../admin-dashboard-desktop/admin-dashboard-desktop.component';
import { AdminDashboardPhoneComponent } from '../admin-dashboard-phone/admin-dashboard-phone.component';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [
    AdminDashboardMainPageComponent,
    AdminDashboardDesktopComponent,
    AdminDashboardPhoneComponent,
  
  ],
  imports: [
    ShearModule,
    AdminDashboardMainPageRoutingModule
  ],exports:[
    AdminDashboardMainPageComponent,
    AdminDashboardMainPageRoutingModule
  ]
})
export class AdminDashboardMainPageModule { }
