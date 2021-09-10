import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiSupermercadoService } from 'src/app/servicios/api/api-supermercado.service';
import { Chart, registerables } from 'chart.js'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;
  data: any;
  labels:any;

  constructor( 
    private router: Router,
    private supermercadoService :ApiSupermercadoService
  ) { 

  }
  
    ngOnInit(): void {
      this.chart = document.getElementById('ventas_supermercado');
      Chart.register(...registerables);
      this.loadChart();

      this.supermercadoService.listarSupermercados().subscribe(
        datos => {
          console.log('---');
          console.log(datos);
        }
      )

    }

    loadChart(){

      this.labels = ['Super 1', 'Super 2', 'Super 3', 'Super 4'];

      const backgroundColor_ = [];
      for(let i in this.labels){
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
              data: [10,20,30,40],
              label: "",
              backgroundColor: backgroundColor_
            }
          ],
          labels: this.labels
        },
        options: {
          responsive: true
        }
      })
    }
  
  

}
