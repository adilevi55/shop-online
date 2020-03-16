import { NgModule } from '@angular/core';
import { MainPageComponent } from '../component/main-page.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { MainPageRoutingModule } from './main-page-routing.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    ShearModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
