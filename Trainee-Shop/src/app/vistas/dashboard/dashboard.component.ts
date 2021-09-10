import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: FacturaService, private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    //this.route.snapshot.paramMap.get('id')
    //let id: number = this.route.snapshot.paramMap.get('id');
    //console.log(id);
  }
    public mostrarVentas():void {
      
    }

  

}
