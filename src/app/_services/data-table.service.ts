import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimpleGlobal} from 'ng2-simple-global';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataTableService {

  constructor(private http: HttpClient, private globals: SimpleGlobal) {
  }

  create() {
    const user = this.globals['USER'];
    const token = this.globals['TOKEN'];
    console.log(user, token);
    return new Observable(project => {
      this.http.get('/api/php/getTable.php?token=' + token + '&user=' + user).subscribe(
        data => {
          project.next(data);
          project.complete();
        });
    });
  }


}
