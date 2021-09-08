import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.css']
})
export class ContratarComponent implements OnInit {

  ver = true;
  constructor() { }
  mostrar(){
    this.ver =false;
  }
  ngOnInit(): void {
  }

}
