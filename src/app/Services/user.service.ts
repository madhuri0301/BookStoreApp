import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }
  
  login(data: any)
  {
    return this.httpService.Post("bookstore_user/login", data, null, false);
  }
  signup(data: any)
  {
    return this.httpService.Post("bookstore_user/registration", data, null, false);
  }
}
