import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  token:any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.baseUrl + url, data);
  }
  getallBook(url:any){
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
  getCarts(url:any){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.baseUrl + url, options);
  }
 
}

