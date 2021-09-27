import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  token: any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean) {
    return this.http.post(this.baseUrl + url, data);
  }
  getallBook(url: any) {
    return this.http.get(this.baseUrl + url);
  }

  addToCart(url: any, data: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl + url, data, options);
  }
  getCarts(url: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }
  // get(url:string, isHeaderRequired:any = false, token: any = null) {
  //   console.log("data got");
  //   let tokenOption = { headers: new HttpHeaders({"x-access-token": token})};
  //   return this.http.get(url, isHeaderRequired && tokenOption)
  // }
  put(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log("putting add" + url, token);
    let tokenOption = { headers: new HttpHeaders({ "x-access-token": token }) };
    return this.http.put(url, data, isHeaderRequired && tokenOption)
  }

  Postt(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(url, data);
    let tokenOption = { headers: new HttpHeaders({ "x-access-token": token }) };
    console.log(tokenOption)
    return this.http.post(url, data, isHeaderRequired && tokenOption)
  }
  delete(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data delete");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.http.delete(url, isHeaderRequired && tokenOption)
  }
  get(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data Got");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.http.get(url, isHeaderRequired && tokenOption)
  }
  addToWishList(url: any, data: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl + url, data, options);
  }

}
