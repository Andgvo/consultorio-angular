import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Routing */
import { TemplateRoutingModule } from './template-routing.module';
import { AngularMaterialModule } from './angular-material.module'
import { MaterialMessagesModule } from './material-messages.module'

/* Components */
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MaterialMessagesModule,
    TemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplateModule { }
