import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  ver = true;
  constructor() { }
  mostrar(){
    this.ver = false;
  }
  ngOnInit(): void {
  }

}
