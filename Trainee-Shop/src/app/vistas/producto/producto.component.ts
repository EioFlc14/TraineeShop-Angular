/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component } from '@angular/core';
import { ProductoService } from '../../servicios/api/api-productos.service';
import {MatDialogModule, MatDialogConfig, MatDialogRef, MatDialog} from '@angular/material/dialog'; 
import { Router } from '@angular/router';
//import { PagoComponent } from '../pago/pago.component';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  title = 'frontangular';
  tasks:any;
  supermercado:Array<any>=[];
  total:Array<any>=[];
  totalfinal:number=0;
  pvp:number=0;
  acu:number=0;
  sup_recibido:string="";
  constructor(
    private taskService:ProductoService,private router: Router//,public dialog: MatDialog
    //
  )  {
    this.getAllTasks();
    //const findSup = this.tasks.find((task: { Supermercado_idSupermercado: string; }) => task.Supermercado_idSupermercado == '3');
   

  //  console.log('Lista Supermercado id = 3',findSup);
  }

  getAllTasks(){
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks=tasks;
     // const recibir=sessionStorage.getItem("id");//setItem("id", dataResponse.nombre_supermercado);
      this.sup_recibido = String(sessionStorage.getItem("id"));
      let firstName = sessionStorage.getItem("id");
      console.log(`Hola, mi nombre es ${firstName}`)
     // console.log('recibir',sessionStorage.getItem("id"));
      console.log('recibir',firstName);
     // console.log('Tareas',this.tasks);
      Object.keys(this.tasks).forEach(key => {
        if (String(this.tasks[key].Supermercado_idSupermercado) == firstName) {    
            this.supermercado.push({
              ...this.tasks[key]
            });
        }
       
    });
    console.log("Listado de los supermercado que son iguales a 3",this.supermercado);
    
      /*this.tasks.forEach((task: any) => {
        console.log(task);
      const findSup = task.find((obj: { Supermercado_idSupermercado: string; }) => obj.Supermercado_idSupermercado == '3');
      if (findSup) {
      this.supermercado.push({
        ...task
      });
    }
  });*/
    });
  }
  addProduct(idProducto: any,index: any){
      console.log([idProducto,index]);
      const cantidad:number = parseInt((<HTMLInputElement>document.getElementById(`cantidad${index}`)).value);
     // let cantidad:any = Object.keys(this.tasks).find(x => this.tasks[x]. == idProducto);
      let indproducto:any = Object.keys(this.tasks).find(x => this.tasks[x].idProducto == idProducto);
      let subtotal=cantidad*this.tasks[indproducto].precio;
      console.log([cantidad]);
      console.log(this.tasks[indproducto]);
      console.log(typeof this.tasks);
      if(this.tasks[indproducto].stock){
        console.log('esta es la cantidad',cantidad);
        console.log('este es el stock',parseInt(this.tasks[indproducto].stock));
        if(cantidad>0 && cantidad <= parseInt(this.tasks[indproducto].stock)){
          this.total.push({
            "id":this.tasks[indproducto].idProducto,
            "nombre":this.tasks[indproducto].nombre_producto,
            "unidad":this.tasks[indproducto].unidad,
            "precio":this.tasks[indproducto].precio,
            "cantidad":cantidad,
            //"cantidad":this.tasks[indproducto].stock,     
            "subtotal":subtotal
          }); 
          this.ftotal();
        }else{
        console.log('nos van a despedir');
        }
       
      }
      
  }  
  remProduct(id:any){
    this.total.splice(id, 1);
    console.log('mostrar',this.total);
    this.ftotal();
  }
  ftotal(){
      this.totalfinal=0;
      this.total.forEach(pro => {   
        this.totalfinal += pro.subtotal;
  }); 
  }
  //pvp=
  ngOnInit(): void{
  }

  //mensajeIngreso: any = "";
  enviarprecio() {
    console.log("el total final", this.totalfinal);
        let idS: string = "" + this.totalfinal;
        sessionStorage.setItem("tpvp", idS);
        console.log("convertido a string es: " + idS)
        this.router.navigate(['pago']);
      
    }

}

