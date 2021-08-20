import { AlertaSweetAlertService } from './../../services/alerta-sweet-alert.service';
import { EmpleadosService } from './../../services/empleados.service';
import { Empleado } from './../../models/empleados.model';
import { Component, OnInit, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.scss']
})
export class CrearEmpleadosComponent implements OnInit {

  empleado: Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    sexo: '',
    edad: 0,
    area: '',
    salario: 0,
    avatar: '',
  } as Empleado

  constructor(
    private empleadosService: EmpleadosService,
    private alertaSweetAlertService: AlertaSweetAlertService
  ) { }

  ngOnInit(): void {

  }

  registrarEmpleado() {
    if (this.empleado.nombre == "" || this.empleado.apellido == "" || this.empleado.sexo == "" || this.empleado.edad == 0 || this.empleado.area == "" || this.empleado.salario == 0) {
      this.alertaSweetAlertService.alerta("info", "Faltan campos", "Ingresa todos los campos para registrar", false);
    } else {
      this.empleadosService.registrarEmpleado(this.empleado).subscribe(
        res => {
          console.log(this.empleadosService.obtenerEmpleados());
          this.alertaSweetAlertService.alerta("success", "Registrado correctamente", `El usuario ${this.empleado.nombre} ha sido registrado correctamente`, true);
        },
        err => {
          this.alertaSweetAlertService.alerta("error", "Error", "Hubo un error en el registro", false);
          console.log(err);
        }
      );
    }
  }


}
