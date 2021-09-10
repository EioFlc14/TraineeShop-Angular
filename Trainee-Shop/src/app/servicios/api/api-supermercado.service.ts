import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supermercado } from '../../modelos/supermercado';
import { responseSupercadoI } from 'src/app/modelos/responseSupercadoI.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiSupermercadoService {
  //private idSupermecado$ = new Subject<any>();

  private baseEndpoint = "https://api-supermercados.herokuapp.com/";
  //private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  mensajeIngreso: any = "";
  loginProductos(form: Supermercado): Observable<responseSupercadoI> {
    let direccion = this.baseEndpoint;
    return this.http.get<responseSupercadoI>(direccion);
  }
  public listarSupermercados(): Observable<Supermercado[]> {
    return this.http.get(this.baseEndpoint).pipe(
      map(supermercados => {
        return supermercados as Supermercado[]
      })
    );
    

  }
  
}
