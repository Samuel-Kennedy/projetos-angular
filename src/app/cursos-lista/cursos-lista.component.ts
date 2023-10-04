import { Component, OnInit } from '@angular/core';
import { CursoListaService } from './curso-lista.service';
import { Curso } from './curso';
import { Observable,  } from 'rxjs';
import { UnsubscribeService } from '../unsubscribe-poc/unsubscribe.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit{

  //cursos: Curso[] = [];
  cursos$!: Observable<Curso[]>;
  constructor(private service: CursoListaService, private serviceSubs: UnsubscribeService){}

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);

    this.cursos$ = this.service.list();  
  }

}
