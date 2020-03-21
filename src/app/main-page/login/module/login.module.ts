import { NgModule } from '@angular/core';
import { LoginComponent } from '../component/login.component';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { LoginRoutingModule } from './login-routing.module';
import { StartOrResumeShoppingBtnComponent } from '../../site-details/start-or-resume-shopping-btn/start-or-resume-shopping-btn.component';

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
