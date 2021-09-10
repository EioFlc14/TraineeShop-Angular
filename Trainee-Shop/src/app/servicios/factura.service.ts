import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private baseEndpoint = "http://34.227.98.168:8888/venta/supermecado";
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public ventaSupermercado(id: number): Observable<number> {
    //let venta= 
    return this.http.get<number>(`${this.baseEndpoint}/${id}`);

  }
}
