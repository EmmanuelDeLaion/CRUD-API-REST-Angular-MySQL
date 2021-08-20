import { AlertaSweetAlertService } from './services/alerta-sweet-alert.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';

import { EmpleadosService } from './services/empleados.service';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EmpleadosPipePipe } from './components/pipes/empleados-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListaEmpleadosComponent,
    CrearEmpleadosComponent,
    EditarEmpleadoComponent,
    EmpleadosPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmpleadosService,
    AlertaSweetAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
