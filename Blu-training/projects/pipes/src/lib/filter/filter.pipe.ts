import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], key: string, value: string): any[] {
    if (!data || !key || !value) {
      return data;
    }
    return data.filter(item => item[key].toLowerCase().includes(value.toLowerCase()));
  }

}
