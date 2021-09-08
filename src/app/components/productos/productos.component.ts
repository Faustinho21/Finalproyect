import { Component, OnInit } from '@angular/core';
import{LockiteckService} from '../../Services/lockiteck.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ProductosComponent : any[] =[];
  Productos2Component : any[] =[];
  Productos3Component : any[] =[];
  
  
  ver = true;
  producto1 = false;
  producto2 = false;
  producto3 = false;
  boton = false;

  constructor(
    private LockiteckService : LockiteckService,
  ) { }
  filterPost = '';
    ver1(){
      this.ver = false;
      this.producto1 = true;
      this.boton = true;
    }
    ver2(){
      this.ver = false;
      this.producto2 = true;
      this.boton = true;
    }
    ver3(){
      this.ver = false;
      this.producto3 = true;
      this.boton = true;
    }
    volver(){
      this.ver = true;
      this.producto1=false;
      this.producto2=false;
      this.producto3=false;

      this.boton = false;
    }
  ngOnInit(): void {
    this.ProductosComponent = this.LockiteckService.getProductos1();
    this.Productos2Component = this.LockiteckService.getProductos2();
    this.Productos3Component = this.LockiteckService.getProductos3();
  }
}
