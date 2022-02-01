import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class LoginModule { }
