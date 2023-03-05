import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },

  // {
  //   path: 'user',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./users-dashboard/users-dashboard.module').then(m => m.UsersDashboardModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
