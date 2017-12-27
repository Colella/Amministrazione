import {Component, OnInit} from '@angular/core';
import {SimpleGlobal} from 'ng2-simple-global';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: any;

  constructor(private globals: SimpleGlobal) {}

  ngOnInit() {}


}
