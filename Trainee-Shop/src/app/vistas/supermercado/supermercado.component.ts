import { Component, OnInit } from '@angular/core';
import { Supermercado } from '../../modelos/supermercado.interface';
import { ApiSupermercadoService } from '../../servicios/api/api-supermercado.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.css']
})
export class SupermercadoComponent implements OnInit {

  titulo = "SUPERMERCADOS";
  supermercados: Supermercado[]= [];

  constructor(
    private service: ApiSupermercadoService
    ) { }

  ngOnInit(): void {
    this.service.listarSupermercados().subscribe(
      supermercados => {
       this.supermercados = supermercados;
       console.log(this.supermercados);
      }
    )}
}
