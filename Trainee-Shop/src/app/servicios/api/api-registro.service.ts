import { RegistroI } from './../../modelos/response-registro.interface';
import { Injectable } from '@angular/core';

import {LoginI} from '../../modelos/login.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroServicio {

  constructor(
    private _http:HttpClient
    ) { }

  getByCedula(cedula:string):Observable<RegistroI>{
    var url = "http://34.227.98.168:4005/clientes/login/";
    let direccion = url;
    return this._http.get<RegistroI>(direccion);
  }


  getByEmail(email:string):Observable<RegistroI>{
    var url = "http://34.227.98.168:4005/clientes/login/";
    let direccion = url;
    return this._http.get<RegistroI>(direccion);
  }

  creatCuenta(registro:any):Observable<RegistroI>{
    var url = "http://34.227.98.168:4003/clientes/";
    let direccion = url;
    return this._http.post<RegistroI>(direccion,registro);
  }


}
