import { NgModule } from '@angular/core';
import { AddUpdateProductDesktopComponent } from '../component/product';
import { ShearModule } from 'src/app/root/modules/shear.module';


@NgModule({
  declarations: [AddUpdateProductDesktopComponent],
  imports: [
    ShearModule,
  ],exports: [
    AddUpdateProductDesktopComponent
  ]
})
export class AddUpdateProductDesktopModule { }
