import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpService) { }

  getallBook(url: any) {
    console.log("given data is", url);
    return this.http.getallBook(url);
  }
}
