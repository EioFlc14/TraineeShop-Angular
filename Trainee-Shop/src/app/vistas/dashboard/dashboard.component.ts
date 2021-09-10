import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiSupermercadoService } from 'src/app/servicios/api/api-supermercado.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }
  public mostrarVentas(): void {

  }
}
