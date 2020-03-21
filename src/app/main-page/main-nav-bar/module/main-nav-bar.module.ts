import { NgModule } from '@angular/core';
import { MainNavBarComponent } from '../component/main-nav-bar.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { MainNavBarModuleRoutingModule } from './main-nav-bar-routing.module';



@NgModule({
  declarations: [MainNavBarComponent],
  imports: [
    ShearModule,
    MainNavBarModuleRoutingModule
  ],
  exports: [
    MainNavBarComponent
  ]
})
export class MainNavBarModule { }
