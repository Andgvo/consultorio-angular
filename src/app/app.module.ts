import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* MODULES */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialTemplateModule } from '@template/angular-material-template.module';
import { TemplateModule } from '@modules/template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* SERVICES */

/* COMPONENTS */
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { MessagesSnackComponent } from '@shared/messages-snack/messages-snack.component';
import { PacienteService } from '@services/paciente/paciente.service';
import { MessagesService } from '@services/messages.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BreadcrumbComponent,
    MessagesSnackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialTemplateModule,
    TemplateModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [ MessagesSnackComponent ],
  providers: [PacienteService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }