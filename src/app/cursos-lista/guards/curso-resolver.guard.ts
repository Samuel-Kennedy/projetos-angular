import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursoListaService } from '../curso-lista.service';


@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private service: CursoListaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of<any> ({
      id: null,
      nome: null
    });
  }
}
