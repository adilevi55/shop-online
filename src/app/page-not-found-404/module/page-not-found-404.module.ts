import { NgModule } from '@angular/core';
import { ShearModule } from 'src/app/root/modules/shear.module';
import { PageNotFoundComponent } from '../component/page-not-found.component';
import { PageNotFound404RoutingModule } from './page-not-found-404-routing.module';



@NgModule({
  declarations: [ PageNotFoundComponent ],
  imports: [
    ShearModule,
    PageNotFound404RoutingModule
  ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFound404Module { }
