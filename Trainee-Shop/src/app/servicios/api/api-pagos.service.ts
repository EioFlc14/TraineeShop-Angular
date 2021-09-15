import { ResponsRegistroI } from './../../modelos/response-registro.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiPagosServicio {


  url:string = "http://3.135.239.12:5000/users?token="+"000"+"-";

  constructor(
    private _http:HttpClient
    ) { }

  validarcuenta(cedula:string,cuenta:string):Observable<any>{
    var direccion= this.url+cedula+"-"+cuenta;
    return this._http.get<any>(direccion);
  }

  pagarbanco(token:string,totalvalor:string){

  }




}

//http://3.135.239.12:5000/users?token=000-1234567890-5555555555

//request.open('GET', 'http://3.16.56.24:5000/users?token='+"000"+'-'+ cli2.cedula + '-' + document.getElementById("cuenta").value, true)