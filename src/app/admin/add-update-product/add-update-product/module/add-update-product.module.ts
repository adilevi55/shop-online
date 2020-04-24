import { NgModule } from '@angular/core';
import { AddUpdateProductRoutingModule } from './add-update-product-routing.module';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { AddUpdateProductDesktopModule } from '../../add-update-product-desktop/module/add-update-product-desktop.module';
import { AddUpdateProductPhoneModule } from '../../add-update-product-phone/module/add-update-prodcut-phone.module';
import { AddUpdateProductComponent } from '../component/add-update-product.component';


@NgModule({
  declarations: [AddUpdateProductComponent],
  imports: [
    ShearModule,
    AddUpdateProductRoutingModule,
    AddUpdateProductDesktopModule,
    AddUpdateProductPhoneModule
  ],exports: [
    AddUpdateProductRoutingModule
  ]
})
export class AddUpdateProductModule { }
