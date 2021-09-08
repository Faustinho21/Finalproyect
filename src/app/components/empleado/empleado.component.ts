import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs'
import { EmpleadoModel} from '../../Models/empleados.model'
import {EmpleadosService} from '../../Services/empleados.service'
import{ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado: EmpleadoModel = new EmpleadoModel();

  
  constructor(private empleadoservice : EmpleadosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.empleadoservice.getEmpleado(id)
        .subscribe((resp: EmpleadoModel)=>{
          this.empleado = resp;
          this.empleado.id = id;
        })

    }
  }

  guardar(){
    Swal.fire({
      icon: 'info',
      title: 'Guardando',
      text: 'Guardando datos!',
    })
    Swal.showLoading();
    let peticion: Observable<any>;
    if (this.empleado.id) {
      peticion = this.empleadoservice.putEmpleado(this.empleado);
    } else {
      peticion = this.empleadoservice.postEmpleados(this.empleado);
      this.empleado.Disponibilidad = true;
    }
    
    peticion.subscribe(resp=>{
      Swal.fire({
        icon: 'success' ,
        title: 'Guardado',
        text: 'Empleado guardado correctamente',
      })
    });
  }
 //funciones activar/desactivar
 activar(){
  Swal.fire({
    icon: 'info',
    title: 'Actualizando',
    text: 'Guardando datos!',
  })
  Swal.showLoading();
  let peticion: Observable<any>;
  if (this.empleado.Disponibilidad == false) {
    this.empleado.Disponibilidad = true;
    peticion = this.empleadoservice.putEmpleado(this.empleado);
  }
  peticion.subscribe(resp=>{
    Swal.fire({
      icon: 'success' ,
      title: 'Guardado',
      text: 'Empleado activado correctamente',
    })
  });

 }
 desactivar(){
    Swal.fire({
    icon: 'info',
    title: 'Actualizando',
    text: 'Guardando datos!',
    })
    Swal.showLoading();
    let peticion: Observable<any>;
   if (this.empleado.Disponibilidad == true) {
    this.empleado.Disponibilidad = false;
    peticion = this.empleadoservice.putEmpleado(this.empleado);
  }
    peticion.subscribe(resp=>{
     Swal.fire({
      icon: 'success' ,
      title: 'Guardado',
      text: 'Empleado desactivado correctamente',
    })
  });
  }
  eliminar(id:string){
    Swal.fire({
      icon: 'info',
      title: 'Actualizando',
      text: 'Guardando datos!',
      })
      this.empleadoservice.deleteEmpleado(id).subscribe(data=> {
      delete this.empleado[id];
      Swal.fire({
        icon: 'success' ,
        title: 'Eliminado',
        text: 'Empleado eliminado correctamente, vuelva a la pagina de inicio',
      })
    });
    }
}
