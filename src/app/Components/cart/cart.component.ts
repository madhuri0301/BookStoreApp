import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity:number=1;
  getBook:any
  card:any
  constructor() { }

  ngOnInit(): void {
  }

}
