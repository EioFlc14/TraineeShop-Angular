import { ResponsRegistroI } from './../../modelos/response-registro.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroServicio {


  url:string = "http://54.221.130.211:3306/clientes/";

  constructor(
    private _http:HttpClient
    ) { }

  getByCedula(cedula:string):Observable<ResponsRegistroI>{
    var login = "login/";
    let direccion = this.url + login + cedula;
    return this._http.get<ResponsRegistroI>(direccion);
  }

  crearCuenta(registro:any):Observable<any>{
    return this._http.post<any>(this.url,registro);
  }

}
