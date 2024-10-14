import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split_string',
  standalone: true
})
export class SplitStringPipe implements PipeTransform {

  transform(value: string): string[] {
    return value.split(',');
  }

}
