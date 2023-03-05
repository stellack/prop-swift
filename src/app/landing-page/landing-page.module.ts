import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { SecondaryNavbarComponent } from './secondary-navbar/secondary-navbar.component';
import { MainLandingPageComponent } from './landing-page/main-landing-page/main-landing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LandingPageComponent,
    FooterComponent,
    SecondaryNavbarComponent,
    MainLandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LandingPageModule { }
