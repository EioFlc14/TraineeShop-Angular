import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiRegistroServicio } from 'src/app/servicios/api/api-registro.service';
import { ResponsRegistroI } from './../../modelos/response-registro.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService]
})

export class RegistroComponent implements OnInit {

  registro = {
    "nombre": "",
    "celular": "",
    "email": "",
    "direccion": "",
    "cedula": "",
    "contrasena":""
  }

  confirmContrasena = null;

  constructor(
    private api:ApiRegistroServicio, 
    private router:Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  validarCedula(){

    var cedula = this.registro.cedula;

    //Preguntamos si la cedula consta de 10 digitos
    if(cedula.length == 10){
       
       //Obtenemos el digito de la region que sonlos dos primeros digitos
       var digito_region = Number(cedula.substring(0,2));
       
       //Pregunto si la region existe ecuador se divide en 24 regiones
       if( (digito_region >= 1 && digito_region <=24) || digito_region == 30 ){
         
         // Extraigo el ultimo digito
         var ultimo_digito   = cedula.substring(9,10);

         //Agrupo todos los pares y los sumo
         var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));

         //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
         var numero1 = Number(cedula.substring(0,1)) * 2;
         if( numero1 > 9 ){ var numero1 = (numero1 - 9); }

         var numero3 = Number(cedula.substring(2,3)) * 2;
         if( numero3 > 9 ){ var numero3 = (numero3 - 9); }

         var numero5 = Number(cedula.substring(4,5))*2;
         if( numero5 > 9 ){ var numero5 = (numero5 - 9); }

         var numero7 = Number(cedula.substring(6,7))*2;
         if( numero7 > 9 ){ var numero7 = (numero7 - 9); }

         var numero9 = Number(cedula.substring(8,9))*2;
         if( numero9 > 9 ){ var numero9 = (numero9 - 9); }

         var impares = numero1 + numero3 + numero5 + numero7 + numero9;

         //Suma total
         var suma_total = (pares + impares);

         //extraemos el primero digito
         var primer_digito_suma = String(suma_total).substring(0,1);

         //Obtenemos la decena inmediata
         var decena = (parseInt(primer_digito_suma) + 1)  * 10;

         //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
         var digito_validador = decena - suma_total;

         //Si el digito validador es = a 10 toma el valor de 0
         if(digito_validador == 10)
           var digito_validador = 0;

         if(digito_validador == Number(ultimo_digito)){
           return true;
         }else{
           return false;
         }
       }else{
         return false;
       }
    }else{
       return false;
    }  
  }

  validarContrasena(){
    return this.registro.contrasena == this.confirmContrasena;
  }

  validarDireccion(){
    return !this.registro.direccion.trim();
  }

  crearCuenta(){
    let registroInsert = {
      "nombreCliente": this.registro.nombre,
      "cedula": this.registro.cedula,
      "passwordCliente": this.registro.contrasena,
      "direccionCliente": this.registro.direccion,
      "emailCliente": this.registro.email,
      "celularCliente": this.registro.celular
    }
    
    this.api.getByCedula(registroInsert.cedula).subscribe(
      dataExistente => {
        let clienteExistente:ResponsRegistroI = dataExistente;
        if(clienteExistente != null){
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al crear la cuenta, cédula o email ya registrados.'});
        } else {
          this.api.crearCuenta(registroInsert).subscribe(
            insercionRgistro => {
              console.log(insercionRgistro)
              // mandar a supermercados y limpiar la pantalla
              this.router.navigate(['login']);
              this.messageService.add({key: 'myKey1', severity:'success', summary: 'Cuenta creada exitosamente'});
            },
            error => {
              console.log(error.status);
              if(error.status == 500){
                this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al crear la cuenta, cédula o email ya registrados.'});
              }
            }
          )
        }
      }
    )

  }

}



