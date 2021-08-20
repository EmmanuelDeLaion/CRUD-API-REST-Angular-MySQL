import { Empleado } from './../../models/empleados.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empleadosPipe'
})
export class EmpleadosPipePipe implements PipeTransform {

  transform(empleado: Empleado [], pagina : number = 0): any {
    return empleado.slice(pagina, pagina += 2);
  }

}
