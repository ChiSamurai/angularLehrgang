import { Component, OnInit } from '@angular/core';

import { LedService } from '../shared/led.service';

/*
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
 */
@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
  providers: [LedService]
})
export class LedListComponent implements OnInit {

  colors: string[];

  constructor(private service: LedService) {
  }

  ngOnInit() {
    this.service.getColors()
 /*
     .take(5)
    .delay(500)
    .do(result => console.log(result))
  */
     .subscribe(result => {
      this.colors = result;
    });
  }

}
