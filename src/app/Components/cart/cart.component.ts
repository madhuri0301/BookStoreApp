import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity:number=1;
  getBook:any;
  card:any;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    // this.getCarts();
  }

}
