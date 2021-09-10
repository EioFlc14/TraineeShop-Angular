import { ResponseI } from './../../modelos/response.interface';
import { Injectable } from '@angular/core';

import {LoginI} from '../../modelos/login.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  url:string = "http://54.221.130.211:4005/clientes/login/";

  constructor(private http:HttpClient) { }
  errorMsj:any = "";
  mensajeLogin:any = "";

  loginByCedula(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + form.usuario + "/" + form.password;
    return this.http.get<ResponseI>(direccion);

  }
}
