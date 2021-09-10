import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { responseSupercadoI } from 'src/app/modelos/responseSupercadoI.interface';
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
    let total = this.service.listarSupermercados().subscribe(supermercados => {
      this.supermercados = supermercados
      console.log(supermercados);
    });
    // this.idSupermecado$.next(this.supermercados);
  }
  /*getID(): Observable<any> {
    return this.idSupermecado$.asObservable();
  }
  */
  mensajeIngreso: any = "";
  enviarIdSuper(id: any) {
    console.log("el id del super", id);
    this.service.loginProductos(id).subscribe(data => {
      let dataResponse: responseSupercadoI = data;
      if (dataResponse != null) {
        let idS: string = "" + id;
        sessionStorage.setItem("id", idS);
        console.log("convertido a string es: " + idS)
        this.router.navigate(['dashboard']);
      } else {
        this.mensajeIngreso = "NO SE PUEDE INGRESAR A LOS PRODUCTOS";
      }
    })

  }





}
