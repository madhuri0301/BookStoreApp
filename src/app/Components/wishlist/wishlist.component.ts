import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  token: any
  wishlistBook: Array<any> =[];

  constructor(private cart : CartService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('Token')
    this.getwishlist();
  }
  getwishlist(){
    this.cart.getWishlist(this.token).subscribe((data:any)=>{
      this.wishlistBook=data['result']
      console.log(this.wishlistBook)
    })
  }

  removeItem=(data: any)=>{
    console.log(data.product_id._id)
    this.cart.deleteWishlist(data.product_id._id, this.token).subscribe((response)=>{
      console.log(response);
      
      this.getwishlist()
    },
    error => {
      console.log(error);
    });
  }
}


