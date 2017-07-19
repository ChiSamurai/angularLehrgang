import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {

  @Input()
  color = 'goldenrod';

  @Input()
  index: number;

  @Output()
  colorChange = new EventEmitter<number>();
  format = 'rgb';

  constructor() { }

  ngOnInit() {
  }

  /**
   * @param ev
   */
  selectColor(ev: TouchEvent | MouseEvent) {
    console.log(this.index);
    this.colorChange.emit(this.index);
  }

}
