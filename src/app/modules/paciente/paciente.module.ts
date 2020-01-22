import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from "@template/angular-material.module";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material";
import { MatSortModule } from "@angular/material";
import { FormularioModule } from "@shared/formulario/formulario.module";

@NgModule({
  declarations: [PacienteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormularioModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]
})
export class PacienteModule { }
