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
  
  constructor(
    private taskService:ProductoService//,public dialog: MatDialog
  )  {
    this.getAllTasks();
    //const findSup = this.tasks.find((task: { Supermercado_idSupermercado: string; }) => task.Supermercado_idSupermercado == '3');
   

  //  console.log('Lista Supermercado id = 3',findSup);
  }

  getAllTasks(){
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks=tasks;
      console.log('Tareas',this.tasks);
      Object.keys(this.tasks).forEach(key => {
        if (this.tasks[key].Supermercado_idSupermercado == '1') {    
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
      let indproducto:any = Object.keys(this.tasks).find(x => this.tasks[x].idProducto == idProducto);
      let subtotal=cantidad*this.tasks[indproducto].precio;
      console.log([cantidad]);
      console.log(this.tasks[indproducto]);
      console.log(typeof this.tasks);
      if(this.tasks[indproducto].stock){

      }
      this.total.push({
        "id":this.tasks[indproducto].idProducto,
        "nombre":this.tasks[indproducto].nombre_producto,
        "unidad":this.tasks[indproducto].unidad,
        "precio":this.tasks[indproducto].precio,
       // "cantidad":cantidad,
        "cantidad":this.tasks[indproducto].stock,
        "subtotal":subtotal,
      });
      this.ftotal();
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
  ngOnInit(): void{
  }
 
  /*openDialog() {    
     const dialogConfig = new MatDialogConfig();          
      dialogConfig.disableClose = false;     
      dialogConfig.autoFocus = true;     
     const dialogRef = this.dialog.open(PagoComponent, dialogConfig);     }*/
}

