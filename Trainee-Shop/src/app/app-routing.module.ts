import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './vistas/login/login.component';
import { SupermercadosComponent } from './vistas/supermercados/supermercados.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'supermercados', component: SupermercadosComponent }
=======
import {LoginComponent} from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path: 'registro', component:RegistroComponent}
>>>>>>> 7db6baa6df7103fe22fa6af38e9af2536351ffc4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {

}
export const routingComponents = [LoginComponent, DashboardComponent, SupermercadosComponent]

=======
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent,RegistroComponent]
>>>>>>> 7db6baa6df7103fe22fa6af38e9af2536351ffc4
