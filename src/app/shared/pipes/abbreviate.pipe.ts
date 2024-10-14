import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate',
  standalone: true
})
export class AbbreviatePipe implements PipeTransform {

  transform(value: string, maxLength: number = 30): string {
    return abbreviateRepeatedString(value, maxLength);
  }

}

function abbreviateRepeatedString(str: string, maxLength: number = 13): string {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + '...';
}