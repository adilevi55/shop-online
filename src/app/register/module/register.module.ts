import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from '../component/register.component';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ShearModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
