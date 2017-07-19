import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {
  color = 'red';
  minlength = 4;

  constructor() { }

  ngOnInit() {
  }

  updateColor(ev: any) {
    console.log(ev);
  }
}
