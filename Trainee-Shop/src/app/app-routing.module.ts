import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import { ProductoComponent } from './vistas/producto/producto.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'producto', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent]
