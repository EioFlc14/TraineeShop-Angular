import { Component, OnInit, Input } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  banco = {
    "idcliente": "",
    "cuenta": "",
  }
  precio:number= 0;
  nombrecli:string="";
  ced:string="";
  cuenta:string="";


  constructor(private router: Router,private http: HttpClient) {
    //this.getAllTasks
   }

  ngOnInit(
  ): void {

    this.precio = Math.round(Number( sessionStorage.getItem("tpvp")) * 100 )/ 100;
    console.log(`precio ${this.precio}`)

    this.nombrecli =  String(sessionStorage.getItem("nombre"));
    console.log(`nombrecliente ${this.nombrecli}`)

    this.ced =  String(sessionStorage.getItem("cedula"));
    console.log(`nombrecliente ${this.ced}`)

      }


  getAllTasks(){

    }

    enviar(){
      // let idc: string = "" + this.ced;
      // sessionStorage.setItem("cedula", idc);
      // let cuenta: string = "" + this.cuenta;
      // sessionStorage.setItem("cuenta", cuenta);
      // let idSupermercado = sessionStorage.getItem("id");
      // console.log("cuenta",cuenta);
      // console.log("idc",idc);

      //this.router.navigate(['login']);


    }

  }
