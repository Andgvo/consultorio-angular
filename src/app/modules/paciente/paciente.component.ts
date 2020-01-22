import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  tituloVistaPrevia = 'Formulario Paciente';
  listaRequisitos = [
    { "nombre": "CURP Min-Max", "requerido": true, "tipo": "campo", "subtipo": "texto", "min": 18, "max": 18},
    { "nombre": "CURP Min", "requerido": true, "tipo": "campo", "subtipo": "texto", "min": 18},
    { "nombre": "CURP Max", "requerido": true, "tipo": "campo", "subtipo": "texto", "max": 18},
    { "nombre": "Edad Min-Max", "requerido": true, "tipo": "campo", "subtipo": "número", "min": 18, "max": 30 },
    { "nombre": "Edad Min", "requerido": true, "tipo": "campo", "subtipo": "número", "min": 18 },
    { "nombre": "Edad Max", "requerido": true, "tipo": "campo", "subtipo": "número", "max": 30 },
    { "nombre": "Genero", "requerido": true, "tipo": "seleccion", "subtipo": "unica", "opciones": { "Hombre": "Hombre", "Mujer": "Mujer", "Otro": "Otro" } },
    { "nombre": "Acta de Nacimiento PDF", "requerido": true, "tipo": "archivo", "subtipo": "pdf", "descripcion": "Ninguna" },
    { "nombre": "Acta de Nacimiento IMG", "requerido": true, "tipo": "archivo", "subtipo": "imagen", "descripcion": "Ninguna" },
    { "nombre": "Fecha egreso Min-Max", "requerido": true, "tipo": "fecha", "subtipo": "rango", "fechaMin": "2020-01-09T06:00:00.000Z", "fechaMax": "2020-01-23T06:00:00.000Z" },
    { "nombre": "Fecha egreso Min", "requerido": true, "tipo": "fecha", "subtipo": "rango", "fechaMin": "2020-01-09T06:00:00.000Z" },
    { "nombre": "Fecha egreso Max", "requerido": true, "tipo": "fecha", "subtipo": "rango", "fechaMax": "2020-01-23T06:00:00.000Z" }	
  ];

  constructor() { }

  ngOnInit() {
  }

  estadoFormulario(formularioRecivido: FormGroup){
    if(formularioRecivido.invalid){
      //this.toast.error("El formulario no es valido");
    }else{
      //this.toast.success("El formulario es valido");
    }
  }
}
