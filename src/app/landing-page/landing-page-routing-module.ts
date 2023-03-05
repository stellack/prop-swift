import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { MainLandingPageComponent } from './landing-page/main-landing-page/main-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: MainLandingPageComponent
      },
    //   {
    //     path: '',
    //     component: 
    //   },
    //   {
    //     path: '',
    //     component: 
    //   },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
