import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProductosComponent } from './components/productos/productos.component';

import{HttpClientModule} from '@angular/common/http';
import { BusquedaPipe } from './Pipes/busqueda.pipe';
import{FormsModule} from '@angular/forms';
import { VerequipoComponent } from './components/verequipo/verequipo.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ContratarComponent } from './components/contratar/contratar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    EquipoComponent,
    ProductosComponent,
    BusquedaPipe,
    VerequipoComponent,
    EmpleadoComponent,
    ComentariosComponent,
    ContratarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
