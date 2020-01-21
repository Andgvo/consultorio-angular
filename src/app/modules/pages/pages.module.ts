import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AngularMaterialTemplateModule } from '@modules/template/angular-material-template.module';
import { MatInputModule } from '@angular/material/input';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [ LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    AngularMaterialTemplateModule,
    MatInputModule,
  ]
})
export class PagesModule { }