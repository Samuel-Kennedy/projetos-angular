import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { AlertModalComponent } from './alert-modal/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './alert-modal/confirm-modal/confirm-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CursosListaComponent,
    UnsubscribePocComponent,
    CursosFormComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
