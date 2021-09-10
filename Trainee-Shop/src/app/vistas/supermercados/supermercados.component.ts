import { Component, OnInit } from '@angular/core';
import { Supermercado } from 'src/app/modelos/supermercado';
import { ApiSupermercadoService } from 'src/app/servicios/api-supermercado.service';

@Component({
  selector: 'app-supermercados',
  templateUrl: './supermercados.component.html',
  styleUrls: ['./supermercados.component.css']
})
export class SupermercadosComponent implements OnInit {
  //subcription: Subscription;
  // usuario:string;
  //password:string;
  titulo = "SUPERMERCADOS";
  supermercados: Supermercado[]= [];
  constructor(private service: ApiSupermercadoService) { }

  ngOnInit(): void {
   let total= this.service.listarSupermercados().subscribe(supermercados => this.supermercados = supermercados);
    console.log(total);
  }

}
