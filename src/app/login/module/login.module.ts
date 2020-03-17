import { NgModule } from '@angular/core';
import { LoginComponent } from '../component/login.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { StartOrResumeShoppingBtnComponent } from 'src/app/start-or-resume-shopping-btn/start-or-resume-shopping-btn.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    StartOrResumeShoppingBtnComponent
  ],
  imports: [
    ShearModule,
    LoginRoutingModule
  ],
  exports: [ LoginComponent]
})
export class LoginModule { }
