import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], generalFilter: string): any[] {
    if (!data) {
      return [];
    }
    if (!generalFilter) {
      return data; // If there's no filter, return the original data
    }

    const filterString = generalFilter.toUpperCase(); // Use one filter string

    return data.filter(item => {
      return Object.keys(item).some(key => {
        const itemValueStr = JSON.stringify(item[key]).toUpperCase();
        return itemValueStr.includes(filterString);
      });
    });
  }
}
