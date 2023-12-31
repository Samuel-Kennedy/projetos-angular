import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoListaService } from '../cursos-lista/curso-lista.service';
import { AlertModalService } from '../alert-modal/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../cursos-lista/curso';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private service: CursoListaService, private fb: FormBuilder, private modal: AlertModalService, private location: Location, private route: ActivatedRoute){}

  /*[Validators.required,Validators.minLingth(3), Validators.maxLength(250)]*/
  ngOnInit(): void {

    // let registro = null;

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);

    //     const curso$ = this.service.loadByID(id)
    //     curso$.subscribe(curso =>{
    //       registro = curso;
    //       this.updateForm(curso);
    //     });
    //   }
    // );

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id =>{
        return this.service.loadByID(id);
      })
    )
    .subscribe(
      (curso) => {
        this.updateForm(curso);
      }
    );

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required,Validators.minLength(3), Validators.maxLength(250)]]
    });
    
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Criado com sucesso')
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente'),
        () => console.log('request completo')
        
      );
    }
  }

  updateForm(curso: any){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    console.log('cancel');
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

}
