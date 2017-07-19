import { Component, OnInit } from '@angular/core';

import { LedService } from '../shared/led.service';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss'],
})
export class LedListComponent implements OnInit {

  colors$: Observable<string[]>;

  constructor(private service: LedService) {
  }

  ngOnInit() {
    this.colors$ = this.service.getColors();
    // this.service.getColors().subscribe((colors: string[]) => { this.colors = colors; });

    // Observable
      // .interval(500)
      // .take(5)
      // .switchMap(() => this.service.getColors())
      // .delay(500)
      // .do(result => console.log(result))
      // .subscribe(result => {
        // this.colors = result;
    // });
  }

  selectColor(index: number) {
    console.log(index);
  }

}
