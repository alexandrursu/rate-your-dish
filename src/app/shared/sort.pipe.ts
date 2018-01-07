import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRating',
  pure: false
})
export class SortByRatingPipe implements PipeTransform {
  public  transform(array: any) {
    return array.sort((a, b) => b.rating - a.rating);
  }
}
