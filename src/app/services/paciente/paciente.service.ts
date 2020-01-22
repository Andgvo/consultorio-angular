import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  public API = '//localhost:8080';
  public PACIENTE_API = this.API + '/paciente/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + 'getAllPaciente');
  }

  get(id: string) {
    return this.http.get(this.PACIENTE_API + 'getPaciente/' + id);
  }

  save(paciente: any): Observable<any> {
    let result: Observable<Object>;
    console.log(paciente);
    console.log(this.PACIENTE_API);
    result = this.http.post(this.PACIENTE_API+'savePaciente', paciente);
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
