import { APP_ID, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Task } from '../../modelos/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    private api = 'https://api-producto5.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { 
   
  }
  getAllTasks(){
    const path = `${this.api}`;
    return this.http.get<Task[]>(path);
  }


  
}
