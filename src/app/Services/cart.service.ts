import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpService) { }

  addToCart(data:any){
    return this.http.addToCart(`bookstore_user/add_cart_item/${data.product_id}` ,data);
  }
  getCarts(url: any) {
    console.log("given data is", url);
    return this.http.getCarts(url);
  }
}
