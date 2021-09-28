import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private search = new BehaviorSubject([]);
  rcvSearch = this.search.asObservable();

  constructor(private http: HttpService) { }

  getallBook(url: any) {
    console.log("given data is", url);
    return this.http.getallBook(url);
  }
  sendSearch(searchWord: any) {
    this.search.next(searchWord);
  }
}
