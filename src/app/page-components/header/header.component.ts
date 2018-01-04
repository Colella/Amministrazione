import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('user') user: any;
  openLeftMenu = false;
  openRightMenu = false;
  constructor(private globals: SimpleGlobal) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  openMenuLeft() {
   this.openLeftMenu = true;
    this.openRightMenu = false;
  }

  closeMenuLeft() {
    this.openLeftMenu = false;
  }

  openMenuRight() {
    this.openRightMenu = true;
    this.openLeftMenu = false;
  }

  closeMenuRight() {
    this.openRightMenu = false;
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
