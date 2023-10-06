import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './curso';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CursoListaService {

  private readonly API = `${environment.API}cursos`;
  
  constructor(private http: HttpClient) { }

  list (){
    console.log(this.API)
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      
      tap(console.log)
    );
  }

  loadByID(id: any){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso: Curso){
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
