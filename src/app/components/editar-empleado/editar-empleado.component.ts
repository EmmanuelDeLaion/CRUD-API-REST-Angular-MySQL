import { AlertaSweetAlertService } from './../../services/alerta-sweet-alert.service';
import { Empleado } from './../../models/empleados.model';
import { EmpleadosService } from './../../services/empleados.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado: any = {
    id: 0,
    nombre: '',
    apellido: '',
    sexo: '',
    edad: 0,
    area: '',
    salario: 0,
    avatar: ''
  };

  constructor(
    private activedRouter: ActivatedRoute,
    private router: Router,
    private empleadosServices: EmpleadosService,
    private alertaSweetAlertService: AlertaSweetAlertService
  ) { }

  ngOnInit(): void {
    this.cargarDatosEmpleado();
  }

  cargarDatosEmpleado() {
    const datos = this.activedRouter.snapshot.params;
    console.log(datos);
    if (datos) {
      this.empleadosServices.obtenerEmpleado(datos.id).subscribe(
        res => {
          console.log(res);
          this.empleado = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }


  editarEmpleado(id: number) {
    this.empleadosServices.actualizarEmpleado(id, this.empleado).subscribe(
      res => {
        console.log(res);
        this.empleado = res;
        this.cargarDatosEmpleado();
        this.alertaSweetAlertService.alerta("success", "Actualizado correctamente", "El usuario ha sido actualizado correctamente", true);
      },
      err => {
        console.error(err);
      }
    );
  }



}
