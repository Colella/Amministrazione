import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LOGIN_API} from '../../environments/environment';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  passwordCheck(user?, password?) {
    if (password.includes('\'')) {
      console.log('SQL INJECTION ', password);
    } else {
      const url = LOGIN_API;
      const body = {
        user: user,
        password: password
      };
      return new Observable(project => {
        this.http.post(url, body).subscribe(
          data => {
            project.next(data);
            project.complete();
          });
      });
    }
  }



}
