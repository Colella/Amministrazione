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
  constructor(private globals: SimpleGlobal) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  openMenu() {
   this.openLeftMenu = true;
  }

  closeMenu() {
    this.openLeftMenu = false;
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
