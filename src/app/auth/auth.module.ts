import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
