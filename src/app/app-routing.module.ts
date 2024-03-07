import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MobileNumberComponent } from './component/mobile-number/mobile-number.component';


const routes: Routes = [
  {path:'',               component:LandingPageComponent},
  {path:'mobile-number',  component:MobileNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
