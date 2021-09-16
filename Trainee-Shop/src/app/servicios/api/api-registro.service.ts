import { ResponsRegistroI } from './../../modelos/response-registro.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroServicio {

  url:string = "http://adaeb302ec9cf4ef7987e8adff15d26f-8798774.us-west-1.elb.amazonaws.com:4003/clientes/";

  constructor(
    private _http:HttpClient
    ) { }

  getByCedula(cedula:string):Observable<ResponsRegistroI>{
    let direccion = this.url + 'login/' + cedula;
    return this._http.get<ResponsRegistroI>(direccion);
  }


  crearCuenta(registro:any):Observable<any>{
    return this._http.post<any>(this.url,registro);
  }

}
