import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'empleados', component: ListaEmpleadosComponent},
  {path: 'crear-empleado',  component: CrearEmpleadosComponent},
  {path: 'editar-empleado/:id',  component: EditarEmpleadoComponent},
  { path: '',   redirectTo: '/empleados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
