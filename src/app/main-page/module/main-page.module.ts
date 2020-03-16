import { NgModule } from '@angular/core';
import { MainPageComponent } from '../component/main-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { MainPageRoutingModule } from './main-page-routing.module';
import { LoginModule } from 'src/app/login/module/login.module';
import { AboutComponent } from 'src/app/about/about.component';
import { SiteDetailsModule } from 'src/app/site-details/module/site-details.module';



@NgModule({
  declarations: [MainPageComponent, AboutComponent],
  imports: [
    ShearModule,
    MainPageRoutingModule,
    LoginModule,
    SiteDetailsModule
  ]
})
export class MainPageModule { }
