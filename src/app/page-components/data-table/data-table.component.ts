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
  total: any;
  name: any;
  surname: any;

  constructor(private dataTableService: DataTableService, private http: HttpClient) {
  }

  ngOnInit() {
    this.createTable();
  }


  createTable() {
    this.dataTableService.create().subscribe(
      table => {
        const json = JSON.parse(table['data']);
        this.name = json[1].name;
        this.surname = json[2].surname;
        this.table = json[3];
        let total = 0;
        this.table.pagamenti.forEach(month => {
          total += Number(month.euro);
        });
        this.total = total;
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
        'mese': mesi[i],
        'euro': '40.00'
      });
    }

    const body = {
      user: 'utente',
      data: [
        {'user': 'utente'},
        {'name': 'Walter'},
        {'surname': 'De Luca'},
        {
          'pagamenti': pagamenti
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
