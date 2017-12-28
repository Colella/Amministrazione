import {Component, OnInit} from '@angular/core';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: any;
  leftMenu = false;
  constructor(private globals: SimpleGlobal) {}

  ngOnInit() {

  }

  onNotify(status: boolean) {
    this.leftMenu = status;
  }


}
