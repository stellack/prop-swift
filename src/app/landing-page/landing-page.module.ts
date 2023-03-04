import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { SecondaryNavbarComponent } from './secondary-navbar/secondary-navbar.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    FooterComponent,
    SecondaryNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
