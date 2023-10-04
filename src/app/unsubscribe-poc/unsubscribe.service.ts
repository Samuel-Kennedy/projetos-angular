import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Curso } from '../cursos-lista/curso';

@Injectable({
  providedIn: 'root'
})
export class UnsubscribeService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  listaEnvio(curso: Curso){
    return this.http.post<Curso[]>(this.API, curso.nome);
  }
}
