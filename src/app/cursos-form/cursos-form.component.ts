import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoListaService } from '../cursos-lista/curso-lista.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private service: CursoListaService, private fb: FormBuilder){}

  /*[Validators.required,Validators.minLingth(3), Validators.maxLength(250)]*/
  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required,Validators.minLength(3), Validators.maxLength(250)]]
    });
    
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit');
    }
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
