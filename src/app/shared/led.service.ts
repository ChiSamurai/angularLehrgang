import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LedService {

  private readonly URL = 'https://ac0457fb37b47b2db958fbe3df9b166d.resindevice.io/api';

  constructor(private client: HttpClient) { }

  /**
   * Returns a list of colors
   */
  getColors(): Observable<string[]> {
    return this.client.get<string[]>(`${this.URL}/colors`);
  }

  /**
   * get color at the colors array's index
   * @param index
   */
  getColor(index: number): Observable<string>{
    return this.getColors()
    .map(colors => colors[index]);
  }
}
