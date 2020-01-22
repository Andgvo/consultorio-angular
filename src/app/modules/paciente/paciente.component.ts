import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PacienteService } from '@services/paciente/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

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

  constructor(private _pacienteService: PacienteService) { }

  ngOnInit() {
  }

  estadoFormulario(formularioRecivido: FormGroup){
    if(formularioRecivido.invalid){
      
    }else{
      console.log( formularioRecivido.value );
      this._pacienteService.save( formularioRecivido.value ).subscribe(result => {
          console.log("success :v")
      }, error => console.error(error));;
    }
  }
}
