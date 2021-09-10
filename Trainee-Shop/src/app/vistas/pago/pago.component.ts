import { Component, OnInit, Input } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
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

  confirmContrasena = null;

  constructor(
   /* private api:ApiRegistroServicio, 
    private router:Router,
    private messageService: MessageService*/
  ) { }

  ngOnInit(): void {
  }
  


  
}
