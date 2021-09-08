import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import{AboutComponent} from './components/about/about.component';
import{ProductosComponent} from './components/productos/productos.component';
import{EquipoComponent}from './components/equipo/equipo.component';
import{VerequipoComponent} from './components/verequipo/verequipo.component';
import {EmpleadoComponent} from './components/empleado/empleado.component';
import{ContratarComponent} from './components/contratar/contratar.component'
import {ComentariosComponent} from './components/comentarios/comentarios.component'
const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'boddy', component: BodyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'verequipo', component: VerequipoComponent},
  {path : 'empleado/:id', component: EmpleadoComponent},
  {path: 'comentarios', component: ComentariosComponent},
  {path: 'contratar', component: ContratarComponent},
  {path: '**', component: BodyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
