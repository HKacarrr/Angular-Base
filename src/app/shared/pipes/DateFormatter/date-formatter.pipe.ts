import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  constructor(private datePipe:DatePipe) {
  }

  transform(value: any, format:string = 'mediumDate'): unknown {
    if (!value) return null;
    return this.datePipe.transform(value, format)
  }
}
