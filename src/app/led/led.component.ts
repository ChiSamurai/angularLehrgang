import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {

  @Input()
  color = 'goldenrod';

  constructor() { }

  ngOnInit() {
  }

}
