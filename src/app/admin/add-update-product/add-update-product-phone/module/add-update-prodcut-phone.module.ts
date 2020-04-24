import { NgModule } from '@angular/core';
import { AddUpdateProductPhoneRoutingModule } from './add-update-product-phone-routing.module';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { AddUpdateProductPhoneComponent } from '../component/add-update-product-phone.component';

@NgModule({
  declarations: [AddUpdateProductPhoneComponent],
  imports: [
    ShearModule,
    AddUpdateProductPhoneRoutingModule
  ],
  exports: [
    AddUpdateProductPhoneComponent
  ]
})
export class  AddUpdateProductPhoneModule { }
