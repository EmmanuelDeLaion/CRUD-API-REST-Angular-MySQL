import { EmpleadosService } from './empleados.service';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AlertaSweetAlertService {

  constructor(
    private router: Router,
    private empleadoService: EmpleadosService
  ) { }

  alerta(tipoAlerta: any, tituloAlerta: string, contenidoAlerta: string, redireccionar: boolean) {
    Swal.fire({
      icon: tipoAlerta,
      title: tituloAlerta,
      text: contenidoAlerta,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(
      (resultado) => {
        if (resultado.isConfirmed) {
          if (redireccionar) {
            this.router.navigate(['/empleados']);
          } else {

          }
        }
      }
    );
  }

  alertaEliminar(tipoAlerta: any, tituloAlerta: string, id: number) {
    Swal.fire({
      icon: tipoAlerta,
      title: tituloAlerta,
      showConfirmButton: true,
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then(
      (result) => {
        if (result.isConfirmed) {
          this.empleadoService.eliminarEmpleado(id).subscribe(
            res => {
              Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'Eliminado correctamente',
                showConfirmButton: true,
                allowOutsideClick: false
              }).then(
                (resultado) => {
                  if (resultado.isConfirmed) {
                    location.reload();
                  }
                }
              );
            },
            err => {
              console.log(err);
            }
          );
        }
      }
    );
  }


}
