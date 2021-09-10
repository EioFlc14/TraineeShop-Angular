import { ResponsRegistroI } from './../../modelos/response-registro.interface';
import { Injectable } from '@angular/core';

import {LoginI} from '../../modelos/login.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroServicio {


  url:string = "http://34.227.98.168:4003/clientes/";

  constructor(
    private _http:HttpClient
    ) { }

  getByCedula(cedula:string):Observable<ResponsRegistroI>{
    var login = "login/";
    let direccion = this.url + login + cedula;
    return this._http.get<ResponsRegistroI>(direccion);
  }

  crearCuenta(registro:any):Observable<any>{
    let direccion = this.url;
    return this._http.post<any>(direccion,registro);
  }


}
