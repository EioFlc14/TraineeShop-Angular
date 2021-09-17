import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPagosServicio } from 'src/app/servicios/api/api-pagos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
  providers: [MessageService]
})

export class PagoComponent implements OnInit {

  tcuenta: string[] = ["debito bancario", "tarjeta de credito"];
  precio: string = "0.00";
  nombrecli: string = "";
  ced: string = "";
  cuenta: string = "";
  opcionSeleccionado: string = "0";
  verSeleccion: string = "";

  constructor(
    private router: Router, 
    private pagoservicio: ApiPagosServicio, 
    private messageService: MessageService
    ) { }

  ngOnInit(
  ): void {

    this.precio = String(Math.round(Number(sessionStorage.getItem("tpvp")) * 100) / 100);
    //let precioAux = this.precio.split(".");

    //if (precioAux[1].length != 2) {
    //  this.precio = this.precio + "0";
    //}

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
              this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Pago realizado exitosamente' });
              setInterval(() => {
                this.router.navigate(['supermercados']);
              }, 2000);
            } else {
              this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error al realizar el pago.' });
            }
          },
          errorpago => {
            console.error(errorpago);
            this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error al realizar el pago.' });
          }
        )
      },
      error => {
        if (error.status == 404) {
          this.messageService.add({ key: 'myKey2', severity: 'warn', summary: 'No existe la cuenta.' });
        } else {
          this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error al realizar la verificación.' });

        }
      }

    )

    /*let idSupermercado = sessionStorage.getItem("id");
    console.log("cuenta",cuenta);
    console.log("idc",idc);*/
  }

}
