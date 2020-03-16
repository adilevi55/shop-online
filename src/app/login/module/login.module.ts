import { NgModule } from '@angular/core';
import { LoginComponent } from '../component/login.component';
import { ShearModule } from 'src/app/root/modules/shear.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShearModule
  ],
  exports: [ LoginComponent]
})
export class LoginModule { }
