import { Empleado } from './../models/empleados.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient ) {

  }

  obtenerEmpleados(){
    return this.http.get(`${this.API_URI}/empleados`);
  }

  obtenerEmpleado(id : string){
    return this.http.get(`${this.API_URI}/empleados/${id}`);
  }

  registrarEmpleado(empleado: Empleado){
    return this.http.post(`${this.API_URI}/empleados`, empleado);
  }

  eliminarEmpleado(id: number){
    return this.http.delete(`${this.API_URI}/empleados/${id}`);
  }

  actualizarEmpleado(id : number, empleadoActualizado : Empleado) {
    return this.http.put(`${this.API_URI}/empleados/${id}`, empleadoActualizado);
  }



}
