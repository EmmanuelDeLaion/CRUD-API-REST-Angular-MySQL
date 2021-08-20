import { Empleado } from './../../models/empleados.model';
import { AlertaSweetAlertService } from './../../services/alerta-sweet-alert.service';
import { EmpleadosService } from './../../services/empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  pagina: number = 0;

  public listaEmpleados: any = [];

  constructor(
    private empleadoService: EmpleadosService,
    private alertaSweetAlertService: AlertaSweetAlertService
  ) {

  }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.obtenerEmpleados().subscribe(
      res => {
        this.listaEmpleados = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  eliminarEmpleado(id: number) {
    this.alertaSweetAlertService.alertaEliminar("error", "¿Seguro que desea eliminar?", id);
  }

  botonAnterior() {
    this.pagina -= 2;

  }

  botonSiguiente() {
    this.pagina += 2;
  }



}
