import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('user') user: any;
  @Output() openLeftMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private globals: SimpleGlobal) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  openMenu() {
    this.openLeftMenu.emit(true);
  }

  closeMenu() {
    this.openLeftMenu.emit(false);
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
