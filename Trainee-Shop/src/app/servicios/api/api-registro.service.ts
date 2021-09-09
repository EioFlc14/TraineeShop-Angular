import { ResponsRegistroI } from './../../modelos/response-registro.interface';
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

  getByCedula(cedula:string):Observable<ResponsRegistroI>{
    var url = "http://34.227.98.168:4003/clientes/login/";
    let direccion = url + cedula;
    return this._http.get<ResponsRegistroI>(direccion);
  }

  getall():Observable<any>{
    var url = "http://34.227.98.168:4003/clientes/login/";
    let direccion = url; // + cedula;
    return this._http.get<ResponsRegistroI>(direccion);
  }

  crearCuenta(registro:any):Observable<any>{
    var url = "http://34.227.98.168:4003/clientes/";
    let direccion = url;
    return this._http.post<any>(direccion,registro);
  }


}
