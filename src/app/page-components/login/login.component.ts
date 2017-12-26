import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../_services/login.service';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private globals: SimpleGlobal) { }

  ngOnInit() {

  }

  login(user, pass) {
    this.loginService.passwordCheck(user, pass).subscribe(
      data => {
        if (data !== null) {
          localStorage.setItem('token', data['TOKEN']);
          location.reload();
        }
      });
  }

}
