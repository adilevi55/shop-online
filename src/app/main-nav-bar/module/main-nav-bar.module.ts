import { NgModule } from '@angular/core';
import { MainNavBarComponent } from '../component/main-nav-bar.component';
import { ShearModule } from 'src/app/root/modules/shear.module';



@NgModule({
  declarations: [MainNavBarComponent],
  imports: [
    ShearModule
  ],
  exports:[
    MainNavBarComponent
  ]
})
export class MainNavBarModule { }
