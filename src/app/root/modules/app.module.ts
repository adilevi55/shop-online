import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app.component';
import { MainNavBarModule } from 'src/app/main-nav-bar/module/main-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
