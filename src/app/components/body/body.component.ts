import { Component, OnInit } from '@angular/core';
import{LockiteckService} from '../../Services/lockiteck.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  boddyComponent: any[] = [];
  constructor(
    private LockiteckService : LockiteckService,
  ) { }

  ngOnInit(): void {
    this.boddyComponent = this.LockiteckService.getLocki();
  }


}
