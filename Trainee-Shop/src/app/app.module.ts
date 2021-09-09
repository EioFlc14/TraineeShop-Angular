import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistroComponent } from './vistas/registro/registro.component';

import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
