import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../Services/empleados.service';
import{EmpleadoModel} from '../../Models/empleados.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verequipo',
  templateUrl: './verequipo.component.html',
  styleUrls: ['./verequipo.component.css']
})
export class VerequipoComponent implements OnInit {
  empleados : EmpleadoModel[] = [];
  constructor(
    private empleadoService : EmpleadosService,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados()
      .subscribe((resp:any) => {
        this.empleados = resp;
        console.log(this.empleados)
      }) 
  }
}
