import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  booksArray: any;
  card: any
  bookId: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service: BookService,
  private snackBar :MatSnackBar,private route:ActivatedRoute) { 
    console.log("this is my card", data);
  }

  ngOnInit(): void {
  }
  getBooks() {
    this.service.getallBook('bookstore_user/get/book').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }

}
