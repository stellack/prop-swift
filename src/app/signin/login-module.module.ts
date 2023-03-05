import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    NewRegistrationComponent,
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule
  ]
})
export class LoginModuleModule { }
