import { Pipe, PipeTransform } from '@angular/core';
import * as tinycolor from 'tinycolor2';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, format?: string): any {
    return tinycolor(value).toString(format);
  }

}
