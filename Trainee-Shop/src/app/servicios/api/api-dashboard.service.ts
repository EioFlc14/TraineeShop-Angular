import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private baseEndpointS = "http://54.221.130.211:8888/venta/supermaxi";
    private baseEndpointC = "http://54.221.130.211:8888/venta/comisariato";
    private baseEndpointT = "http://54.221.130.211:8888/venta/tia";
    private baseEndpointA = "http://54.221.130.211:8888/venta/aki";

    constructor(private http: HttpClient) { }

    public ventaSupermaxi(): Observable<number> {
        return this.http.get<number>(this.baseEndpointS);
    }

    public ventaComisariato(): Observable<number> {
        return this.http.get<number>(this.baseEndpointC);
    }

    public ventaTia(): Observable<number> {
        return this.http.get<number>(this.baseEndpointT);
    }

    public ventaAki(): Observable<number> {
        return this.http.get<number>(this.baseEndpointA);
    }

    public ventasSupermercado(id:number): Observable<number> {
        let url = "http://54.221.130.211:8888/venta/supermercado/" + id;
        return this.http.get<number>(url);    
    }

}
