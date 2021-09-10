import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiSupermercadoService } from 'src/app/servicios/api/api-supermercado.service';
import { Chart, registerables } from 'chart.js'; 
import { DashboardService } from 'src/app/servicios/api/api-dashboard.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;

  constructor( 
    private router: Router,
    private supermercadoService :ApiSupermercadoService,
    private _dashboardService : DashboardService
  ) { 

  }
  
    ngOnInit(): void {
      this.chart = document.getElementById('ventas_supermercado');
      Chart.register(...registerables);
      this.loadChart();

    }

    loadChart(){
      var titulos: string[] = [];
      var ids_: number[] = [];
      var data_: number[] = [];

      this.supermercadoService.listarSupermercados().subscribe(
        datos => {
          datos.forEach(function (value) {
            titulos.push(value.nombre_supermercado);
            ids_.push(Number(value.idSupermercado));
        });

        let contador = 0;
        for (let id of ids_){
          contador = contador + 1;
          this._dashboardService.ventasSupermercado(Number(id)).subscribe(
            respuesta => {
              data_.push(Math.round(respuesta));
              if (contador == ids_.length){
                const backgroundColor_ = [];
                for(let i in titulos){
                  const r = Math.floor(Math.random() * 255);
                  const g = Math.floor(Math.random() * 255);
                  const b = Math.floor(Math.random() * 255);
                  backgroundColor_.push('rgba('+r+', '+g+', '+b+', 0.5)');
                }
                
                new Chart(this.chart,{
                  type: 'bar',
                  data: {
                    datasets: [
                      {
                        data: data_,
                        label: "",
                        backgroundColor: backgroundColor_
                      }
                    ],
                    labels: titulos
                  },
                  options: {
                    responsive: true
                  }
                });
              }
            }
          )
        }
        }
      )
    }
}
