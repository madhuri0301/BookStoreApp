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
}
