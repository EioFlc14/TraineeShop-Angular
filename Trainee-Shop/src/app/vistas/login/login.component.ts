import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiLoginService } from '../../servicios/api/api-login.service'
import { LoginI } from '../../modelos/login.interface'
import { ResponseI } from '../../modelos/response.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiLoginService, private router: Router) { }

  errorStatus: boolean = false;
  errorMsj: any = "";

  ngOnInit(): void {
  }

  onLogin(form: any) {
    //console.log(form)
    this.api.loginByCedula(form).subscribe(data => {
      //console.log(data);
      let dataResponse: ResponseI = data;
      //localStorage.removeItem("cedula");
      sessionStorage.removeItem("cedula");
      if (dataResponse != null) {
        //localStorage.setItem("cedula",dataResponse.cedula);
        sessionStorage.setItem("cedula", dataResponse.cedula);
        sessionStorage.setItem("nombre", dataResponse.nombreCliente);
        this.router.navigate(['supermercados']);
      } else {
        this.errorStatus = true;
        this.errorMsj = "Usuario o contraseña incorrectos";
      }
    })
  }

}
