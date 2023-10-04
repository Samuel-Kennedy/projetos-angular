import { Component, OnInit } from '@angular/core';
import { CursoListaService } from '../cursos-lista/curso-lista.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.css']
})
export class UnsubscribePocComponent implements OnInit{

  constructor(private service: CursoListaService){}

  ngOnInit(): void{

  }

  emitirValor(valor: string){

  }

  destruirComponentes(){

  }

}
