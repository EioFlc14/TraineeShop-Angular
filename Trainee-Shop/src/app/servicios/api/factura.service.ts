import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private baseEndpointS = "http://54.221.130.211:8888/venta/supermaxi";
  private baseEndpointC = "http://54.221.130.211:8888/venta/comisariato";
  private baseEndpointT = "http://54.221.130.211:8888/venta/tia";
  private baseEndpointA = "http://54.221.130.211:8888/venta/aki";
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public ventaSupermaxi(): Observable<any> {
    return this.http.get<any>(this.baseEndpointS);
  }

  public ventaComisariato(): Observable<any> {
    return this.http.get<any>(this.baseEndpointC);
  }
  public ventaTia(): Observable<any> {
    return this.http.get<any>(this.baseEndpointT);
  }
  public ventaAki(): Observable<any> {
    return this.http.get<any>(this.baseEndpointA);
  }
}
