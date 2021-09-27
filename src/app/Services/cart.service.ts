import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  sendMessage = new Subject();

  constructor(private http : HttpService) { }

  url = environment.baseUrl;

  addToCart(data:any){
    return this.http.addToCart(`bookstore_user/add_cart_item/${data.product_id}` ,data);
  }
  getCarts(url: any) {
    console.log("given data is", url);
    return this.http.getCarts(url);
  }
  putAddress = (data: any, token: any) => {
    return this.http.put(`${this.url}bookstore_user/edit_user`, data, true, token);
  }
  
  // communicateMessage(msg: any) {
  //   this.sendMessage.next(msg)
  // }
  order = (data: any, token: any) => {
    // console.log(data, token)
    return this.http.Postt(`${this.url}bookstore_user/add/order`, data, true, token);
  } 
  addToWishlist(data:any){
    return this.http.addToCart(`bookstore_user/add_wish_list/${data.product_id}` ,data);
  }
 
  deleteItem = (data: any, token: any) => {
    console.log(data, token)
    return this.http.delete(`${this.url}bookstore_user/remove_cart_item/${data}`, true, token)
  }
  getWishlist = (token: any) => {
    return this.http.get(`${this.url}bookstore_user/get_wishlist_items`, true, token)
  }
  deleteWishlist = (data: any, token: any) => {
    console.log(data, token)
    return this.http.delete(`${this.url}bookstore_user/remove_wishlist_item/${data}`, true, token)
  }
}
