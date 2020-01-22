import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components view examples */
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'paciente', loadChildren: () => import('@modules/paciente/paciente.module').then( m => m.PacienteModule ) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
