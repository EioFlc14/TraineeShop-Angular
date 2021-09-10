import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supermercado } from '../../modelos/supermercado';

@Injectable({
  providedIn: 'root'
})
export class ApiSupermercadoService {

  private baseEndpoint = "https://api-supermercados.herokuapp.com/";
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  public listarSupermercados(): Observable<Supermercado[]> {
    //this.http.get<Supermercado[]>(this.baseEndpoint)
    return this.http.get(this.baseEndpoint).pipe(
      map(supermercados => {
        return supermercados as Supermercado[]
      })
    );

  }
}
