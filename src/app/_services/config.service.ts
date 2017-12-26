import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimpleGlobal} from 'ng2-simple-global';
import 'rxjs/add/operator/map';
import {LoginService} from './login.service';


@Injectable()
export class ConfigService {

  config: any;

  constructor(private http: HttpClient, private globals: SimpleGlobal, private loginService: LoginService) {
  }

  load(): Promise<any> {
    return new Promise((resolve: any) => {
      this.http.get('/api/php/config.php').subscribe(
        config => {
          this.globals['CONFIG'] = config;
          if (localStorage.getItem('token') !== null) {
            const token = this.globals['TOKEN'] = localStorage.getItem('token');
            const loginUrl = '/api/php/get.php?token=' + token;
            this.globals['USER_LOGGED'] = true;
            this.http.get(loginUrl).subscribe(
              (data) => {
                this.globals['USER'] = data['USER'];
                resolve(true);
              });
          } else {
            this.globals['USER_LOGGED'] = false;
            resolve(true);
          }
        });
    });

  }

}
