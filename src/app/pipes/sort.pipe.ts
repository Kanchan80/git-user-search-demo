import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(list: any[], column:string): any[] {
    if( column == 'nameAsc' || column == 'idAsc' ) {
      return this.sortAsc(list, column);
    } else {
      return this.sortDsc(list, column);
    }
  }

  sortAsc(list: any[], column:string): any[] {
    column = column == 'nameAsc' ? 'login' : 'id';
    let sortedArray = list.sort((a,b)=>{
      if(a[column] > b[column]) {
        return 1;
      }
      if(a[column] < b[column]) {
        return -1;
      }
      return 0;
    });
    return sortedArray;
  }

  sortDsc(list: any[], column:string): any[] {
    column = column == 'nameAsc' ? 'login' : 'id';
    let sortedArray = list.sort((a,b)=>{
      if(a[column] < b[column]) {
        return 1;
      }
      if(a[column] > b[column]) {
        return -1;
      }
      return 0;
    });
    return sortedArray;
  }
}
