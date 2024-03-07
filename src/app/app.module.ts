import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MobileNumberComponent } from './component/mobile-number/mobile-number.component';
import { PopUpComponent } from './component/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MobileNumberComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
