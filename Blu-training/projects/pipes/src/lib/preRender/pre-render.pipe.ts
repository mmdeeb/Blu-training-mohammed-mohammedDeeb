import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
  standalone: true
})
export class PreRenderPipe implements PipeTransform {

  transform(text: string, option: string): string {

    switch (option.toLowerCase()) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'camelcase':
        return this.toCamelCase(text);
      default:
        return text; 
    }


  }
   toCamelCase(text: string): string {
    return text.split(' ').map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');  }
}
