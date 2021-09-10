import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private router: Router) {
    this.getAllTasks
   }

  ngOnInit(): void {}
  getAllTasks(){

      let precio = sessionStorage.getItem("id");
      console.log(`precio ${precio}`)
       
    }
    almcuenta() {
      
      sessionStorage.setItem('cuenta','sessionStorage.getItem("cuenta")')
          
        
      }
  }
     


      

