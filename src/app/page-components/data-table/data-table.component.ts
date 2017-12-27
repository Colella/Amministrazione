import {Component, OnInit} from '@angular/core';
import {DataTableService} from '../../_services/data-table.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  table: any;

  constructor(private dataTableService: DataTableService, private http: HttpClient) {
  }

  ngOnInit() {
    this.createTable();
  }


  createTable() {

    this.dataTableService.create().subscribe(
      table => {

        this.table = JSON.parse(table['data'])[1];
        console.log(this.table);
        /*_table.map(elem => {
            console.log(elem);
          });
*/

        // console.log(this.table);
      });
  }

  send() {

    const pagamenti = [];
    const mesi = ['Gennaio', 'Febbraio',
    'Marzo', 'Aprile',
    'Maggio', 'Giugno',
    'Luglio', 'Agosto',
    'Settembre', 'Ottobre',
    'Novembre', 'Dicembre'];

    for (let i = 0; i < mesi.length; i++) {
      pagamenti.push({
        'mese' : mesi[i],
        'euro' : '40.00'
      });
    }

    const body = {
      user: 'utente',
      data: [
        {'user': 'utente'},
        {
          'pagamenti':  pagamenti
        }
      ]
    };
    this.http.post('/api/php/addData.php', body).subscribe(
      data => {
        console.log('bama', data);
      }, (error) => {
        console.log(error);
      });
  }


}
