import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MobileNumberComponent } from './component/mobile-number/mobile-number.component';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TranctionInfoComponent } from './component/tranction-info/tranction-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MobileNumberComponent,
    PopUpComponent,
    TranctionInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
