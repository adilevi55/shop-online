import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app.component';
import { MainNavBarModule } from 'src/app/main-nav-bar/module/main-nav-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SiteDetailsModule } from 'src/app/site-details/module/site-details.module';
import { LoginModule } from 'src/app/login/module/login.module';
import { ShearModule } from './shear.module';
import { MainPageComponent } from 'src/app/main-page/main-page.component';
import { AboutComponent } from 'src/app/about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
