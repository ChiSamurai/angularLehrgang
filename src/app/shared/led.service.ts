import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
}
