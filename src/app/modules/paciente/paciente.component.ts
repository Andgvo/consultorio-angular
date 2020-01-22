import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PacienteService } from '@services/paciente/paciente.service';
import { BC_PACIENTE } from "@routing/ListLinks";
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDato } from '@models/template/tipo-dato';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { MessagesService } from '@services/messages.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit, AfterViewInit{

  tituloVistaPrevia = 'Formulario Paciente';
  listaRequisitos = [
    { "nombre": "idCliente", "requerido": true, "tipo": "campo", "subtipo": "número" },
    { "nombre": "nombres", "requerido": true, "tipo": "campo", "subtipo": "texto", "max": 50 },
    { "nombre": "apellidos", "requerido": true, "tipo": "campo", "subtipo": "texto", "max": 50 },
    { "nombre": "email", "requerido": true, "tipo": "campo", "subtipo": "texto", "max": 80 },
    { "nombre": "telefono", "requerido": true, "tipo": "campo", "subtipo": "texto", "max": 10 },
    { "nombre": "fechaNac", "requerido": true, "tipo": "fecha", "subtipo": "libre", "fechaMin": "2005-01-01T06:00:00.000Z", "fechaMax": "" },
    { "nombre": "curp", "requerido": true, "tipo": "campo", "subtipo": "texto", "min":18, "max": 18 }
  ];

  //Variables para las tablas
  displayedColumns: string[] = ['idCliente','nombres', 'apellidos', 'email', 'telefono', 'acciones'];
  documentos: MatTableDataSource<TipoDato> = new MatTableDataSource();;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _pacienteService: PacienteService, private toast: MessagesService) {
    BreadcrumbComponent.update(BC_PACIENTE);
  }

  ngOnInit() {
    this.getPacientes();
  }

  ngAfterViewInit() {
    this.updateTablaRequerimiento();
  }

  applyFilter(filterValue: string) {
    this.documentos.filter = filterValue.trim().toLowerCase();
    if (this.documentos.paginator) {
      this.documentos.paginator.firstPage();
    }
  }
  
  private updateTablaRequerimiento(): void {
    this._pacienteService.getAll().subscribe( (documentos:any[]) => this.documentos.data = documentos ); //PRODUCCION
    this.documentos.paginator = this.paginator;
    this.documentos.sort = this.sort;
  }

  getPacientes(){
    this._pacienteService.getAll().subscribe( (documentos:any[]) => this.documentos.data = documentos ); //PRODUCCION
  }
  
  savePaciente(formularioRecivido: FormGroup){
    if(formularioRecivido.invalid){
      this.toast.danger("Llena de manera correcta el formulario");
    }else{
      console.log( formularioRecivido.value );
      this._pacienteService.save( formularioRecivido.value ).subscribe(result => {
        this.toast.success("Se agrego correctamente");
        this.getPacientes();
        this.updateTablaRequerimiento();
      }, error => console.error(error));
    }
  }

  removePaciente(id){
    this._pacienteService.remove(id).subscribe(result => {
      this.toast.success("Se elimino correctamente");
      this.getPacientes();
      this.updateTablaRequerimiento();
    }, error => console.error(error));;
  }
}
