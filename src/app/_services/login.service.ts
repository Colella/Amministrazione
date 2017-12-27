import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  passwordCheck(user?, password?) {
    if (password === '\' OR \'1\'=\'1') {
      console.log('SQL INJECTION "\' OR \'1\'=\'1"');
    } else {
      const url = '/api/php/login.php';
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
