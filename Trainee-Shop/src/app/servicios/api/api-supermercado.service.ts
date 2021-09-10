import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supermercado } from '../../modelos/supermercado';

@Injectable({
  providedIn: 'root'
})
export class ApiSupermercadoService {
  //private idSupermecado$ = new Subject<any>();

  private baseEndpoint = "https://api-supermercados.herokuapp.com/";
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  public listarSupermercados(): Observable<Supermercado[]> {
    return this.http.get(this.baseEndpoint).pipe(
      map(supermercados => {
        return supermercados as Supermercado[]
      })
    );
    //this.idSupermecado$.next(Supermercado);

  }
  
}
