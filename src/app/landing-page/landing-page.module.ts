import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { SecondaryNavbarComponent } from './secondary-navbar/secondary-navbar.component';
import { LandingPageRoutingModule } from './landing-page-routing-module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainLandingPageComponent } from './landing-page/main-landing-page/main-landing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    FooterComponent,
    SecondaryNavbarComponent,
    MainLandingPageComponent
  ],
  imports: [
    LandingPageRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LandingPageModule { }
