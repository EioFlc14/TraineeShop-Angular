import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { SupermercadosComponent } from './vistas/supermercados/supermercados.component';
import { ProductoComponent } from './vistas/producto/producto.component';
import { PagoComponent } from './vistas/pago/pago.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'supermercados', component: SupermercadosComponent, canActivate: [AuthGuard] },
  { path: 'producto', component: ProductoComponent, canActivate: [AuthGuard]},
  { path: 'pago', component: PagoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [LoginComponent, SupermercadosComponent, RegistroComponent,PagoComponent,ProductoComponent]

