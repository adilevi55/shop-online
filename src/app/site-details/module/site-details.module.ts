import { NgModule } from '@angular/core';
import { SiteDetailsComponent } from '../component/site-details.component';
import { ShearModule } from 'src/app/root/modules/shear.module';



@NgModule({
  declarations: [SiteDetailsComponent],
  imports: [
    ShearModule
  ],
  exports: [SiteDetailsComponent]
})
export class SiteDetailsModule { }
