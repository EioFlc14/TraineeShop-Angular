import { ApiLoginService } from './../servicios/api/api-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ApiLoginService:ApiLoginService, private router:Router){}

  redirect(valorcedula: any){
    if(valorcedula == null){
      sessionStorage.removeItem("cedula");
      this.router.navigate(['login']);
      return false;
    }else{
      return true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cedula = sessionStorage.getItem("cedula");
    ;
      return this.redirect(cedula);
  }

}
