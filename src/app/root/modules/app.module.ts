import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { entryComponents } from './entryComponents';
import { HttpErrorInteceptor } from 'src/app/services/error.inteceptor';
import { MainPageComponent } from 'src/app/main-page/main-page-component/main-page.component';
import { AboutComponent } from 'src/app/main-page/about/about.component';
import { MainNavBarModule } from 'src/app/main-page/main-nav-bar/module/main-nav-bar.module';
import { ShearModule } from './shear.module';
import { LoginModule } from 'src/app/main-page/login/module/login.module';
import { SiteDetailsModule } from 'src/app/main-page/site-details/module/site-details.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    entryComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShearModule,
    LoginModule,
    SiteDetailsModule,
    RouterModule

  ],
  entryComponents: [entryComponents],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInteceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
