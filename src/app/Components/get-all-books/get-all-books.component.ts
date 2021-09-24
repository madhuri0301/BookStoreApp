import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  BookQuanity: number = 0;
  booksArray: any;
  @Input() card: any;
  id: any;

  constructor(private service: BookService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.service.getallBook('bookstore_user/get/book').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);
    });
  }
  toProductPage(id: any) {
    this.id = id;
    this.router.navigate(['/bookdetails'], { state: { value: id } })
  }
}
