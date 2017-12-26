import {Component, Input, OnInit} from '@angular/core';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('user') user: any;

  constructor(private globals: SimpleGlobal) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
