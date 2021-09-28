import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(value: any = [], filterString: string) {
    if (filterString == '' || filterString == null) {
      return value;
    }

    const booksArray = []
    for (const Book of value) {
      if (Book.bookName.includes(filterString) || Book.description.includes(filterString)
        || Book.author.includes(filterString)) {
        booksArray.push(Book);
      }
    }
    return booksArray;
  }

}