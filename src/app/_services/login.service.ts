import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  passwordCheck(user?, password?) {
    const url = '/api/php/get.php?user=' + user + '&password=' + password;
    return new Observable(project => {
      this.http.get(url).subscribe(
        data => {
          project.next(data);
          project.complete();
        });
    });
  }



}
