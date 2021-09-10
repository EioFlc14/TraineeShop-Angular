import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Supermercado } from 'src/app/modelos/supermercado';
import { ApiSupermercadoService } from 'src/app/servicios/api/api-supermercado.service';

@Component({
  selector: 'app-supermercados',
  templateUrl: './supermercados.component.html',
  styleUrls: ['./supermercados.component.css']
})
export class SupermercadosComponent implements OnInit {
  // private idSupermecado$ = new Subject<any>();
  //subcription: Subscription;
  // usuario:string;
  //password:string;
  titulo = "SUPERMERCADOS";
  supermercados: Supermercado[] = [];
  constructor(private service: ApiSupermercadoService, private router: Router) { }

  ngOnInit(): void {
    let total = this.service.listarSupermercados().subscribe(supermercados => this.supermercados = supermercados);
    // this.idSupermecado$.next(this.supermercados);
  }
  /*getID(): Observable<any> {
    return this.idSupermecado$.asObservable();
  }
  */

  enviarIdSuper(id: number) {
    console.log(id);
    console.log(id);
    console.log(23424343);
    console.log(23424343);
    console.log(23424343);
    console.log(23424343);
    console.log(id);
    console.log("estoy probando")
  }





}
