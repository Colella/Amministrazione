import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input('leftMenu') leftMenu: any;

  constructor() { }

  ngOnInit() {
    console.log(this.leftMenu);
  }

}
