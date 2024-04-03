import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
  standalone: true
})
export class PreRenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
