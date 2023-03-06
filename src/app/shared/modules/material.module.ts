import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule
    // other material modules
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
    // other material modules
  ]
})
export class MaterialModule { }