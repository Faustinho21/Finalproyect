import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators';
import{EmpleadoModel} from '../Models/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = 'https://proyectofinal-fdb4b-default-rtdb.firebaseio.com/';
  constructor(
    private http: HttpClient
  ) { }
  //Create = post
  postEmpleados(empleado: EmpleadoModel){
    return this.http.post(`${this.url}/Equipo.json`,empleado)
            .pipe(
              map((resp:any)=>{
                console.log(resp);
                empleado.id = resp.name;
                return empleado;
              })

            )
  }

  //Read = get

  getEmpleados(){
    return this.http.get(`${this.url}/Equipo.json`)
        .pipe(
          map(this.crearArray)
        )

  }
  private crearArray(empleadosObj: object){

    const empleados: EmpleadoModel [] = [];

    Object.keys(empleadosObj).forEach(key =>{
      const empleado : EmpleadoModel = empleadosObj[key];
      empleado.id = key;
      empleados.push(empleado);
    });
    return empleados;
  }

  getEmpleado(id:string){

    return this.http.get(`${this.url}/Equipo/${id}.json`)
  }
  //Update = put
  putEmpleado(empleado: EmpleadoModel){
    const empleadoTemp = {
      ...empleado
    }
    delete empleadoTemp.id
    return this.http.put(`${this.url}/Equipo/${empleado.id}.json`,empleadoTemp);

  }
  deleteEmpleado(id:string){

    return this.http.delete(`${this.url}/Equipo/${id}.json`).pipe(map(res=>{
      return res;
    }));
    
  }
}
