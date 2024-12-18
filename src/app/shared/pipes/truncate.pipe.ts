import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 4): string {
    if (!value) return '';

    // Limitar las palabras y agregar '...'
    const words = value.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return value;
    }
  }
}
