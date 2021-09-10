import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supermercado } from '../../modelos/supermercado.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiSupermercadoService {

  private baseEndpoint = "https://api-supermercados.herokuapp.com/";
  
  constructor(
      private http: HttpClient
  ) { }

  public listarSupermercados(): Observable<Supermercado[]> {
    return this.http.get(this.baseEndpoint).pipe(
      map(supermercados => {
        return supermercados as Supermercado[]
      })
    );

  }
}