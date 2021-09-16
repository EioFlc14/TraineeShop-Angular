import { Component, OnInit, Input } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiPagosServicio } from 'src/app/servicios/api/api-pagos.service';
import { pink } from 'src/environments/environment';
import { orange } from 'src/environments/environment';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  pinkFront = pink;
  orangeFront = orange;

  tcuenta: string[] = ["debito bancario", "tarjeta de credito"];
  precio: string = "0.00";
  nombrecli: string = "";
  ced: string = "";
  cuenta: string = "";
  opcionSeleccionado: string = "0";
  verSeleccion: string = "";

  constructor(private router: Router, private http: HttpClient, private pagoservicio: ApiPagosServicio) { }

  ngOnInit(
  ): void {

    this.precio = String(Math.round(Number(sessionStorage.getItem("tpvp")) * 100) / 100);
    let precioAux = this.precio.split(".");
    
    if(precioAux[1].length != 2){
      this.precio = this.precio + "0";
    }

    this.nombrecli = String(sessionStorage.getItem("nombre"));
    console.log(`nombrecliente ${this.nombrecli}`)

    this.ced = String(sessionStorage.getItem("cedula"));
    console.log(`nombrecliente ${this.ced}`)

  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    console.log("javier seleccionaste", this.verSeleccion, this.opcionSeleccionado);
  }

  enviar() {

    let idc = String(this.ced);
    sessionStorage.setItem("cedula", idc);
    let cuenta = String(this.cuenta);
    sessionStorage.setItem("cuenta", cuenta);

    this.pagoservicio.validarcuenta(idc, cuenta).subscribe(
      respuestaverificacion => {
        let token = respuestaverificacion.token
        this.pagoservicio.pagarbanco(token, this.precio).subscribe(
          repuestapago => {
            if (repuestapago.code == 0) {
              alert('Pago realizado exitosamente');
            } else {
              alert('Error al realizar pago');
            }
          },
          errorpago => {
            console.error(errorpago);
          }
        )
      },
      error => {
        if (error.status == 404) {

          alert('No existe la cuenta');
        } else {
          alert('Error al realizar la verificación');

        }
      }

    )

    /*let idSupermercado = sessionStorage.getItem("id");
    console.log("cuenta",cuenta);
    console.log("idc",idc);*/
  }

}
