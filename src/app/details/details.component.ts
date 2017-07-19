import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LedService } from '../shared/led.service';

@Component({
  selector: 'pi-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  index: number;

  color: string;

  constructor(private route: ActivatedRoute, private service: LedService) { }
  ngOnInit() {
    this.index = this.route.snapshot.params.index;
    this.service.getColor(this.index)
      .subscribe(result => this.color = result);
  }

}
