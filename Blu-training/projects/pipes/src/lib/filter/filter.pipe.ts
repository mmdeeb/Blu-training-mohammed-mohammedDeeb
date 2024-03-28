import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false,//this to chang the data with any chang in value
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], filters: { [key: string]: any }): any[] {
    if (!data) {
      return [];
    }

    return data.filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        key=key.toLocaleLowerCase();
        if (!value) return true; 
        if (!item.hasOwnProperty(key)) return false;
        const itemValueStr = JSON.stringify(item[key]).toUpperCase();
        return itemValueStr.includes(value.toString().toUpperCase());
      });
    });
  }
  
}
