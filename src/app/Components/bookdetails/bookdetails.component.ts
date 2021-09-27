import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/cart.service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {

  data: any;
  booksArray: any;
  card: any
  bookId: any;

  constructor(private router: Router,
    private snackBar: MatSnackBar,
    public cart: CartService,
    private service: BookService,) {

    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data)
  }

  ngOnInit(): void {
    this.getData()
   
  }

  getData = () => {
    this.data = this.data['value']
  }
  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }

  addToCart() {
    let data = {
      product_id: this.data._id,
    }
    console.log(data)
    this.cart.addToCart(data).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Book Added To Cart', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.snackBar.open('Error while adding book to cart', 'close')._dismissAfter(2000);
        console.log(error);
      })
  }
  addWishList() {
    let data = {
      product_id: this.data._id,
    }
    console.log(data)
    this.cart.addToWishlist(data).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Book Added To WishList', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.snackBar.open('Error while adding book to WishList', 'close')._dismissAfter(2000);
        console.log(error);
      })
  }

}
