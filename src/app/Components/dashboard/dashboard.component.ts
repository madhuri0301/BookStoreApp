import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileDialogShown:boolean = false;
  userSignedOff:boolean = true;

  isSearch=false;

  constructor(private route:Router,private bookService : BookService) { }

  ngOnInit(): void {
  }
  shareSearchWord(search: any) {
    this.bookService.sendSearch(search);
  }
 
  profileDialogShownToggle(){
    this.profileDialogShown = ! this.profileDialogShown;
  }
  SignOut(){
    localStorage.clear();
    this.route.navigate(['login']);
  }
  Login(){
    this.route.navigate(['login']);
  }
  showCart(){
    this.route.navigate(['dashboard/cart']);
  }
  getwishlist(){
    this.route.navigate(['dashboard/wishlist']);
  }
  myprofile(){
    this.route.navigate(['dashboard/myprofile'])
  }
}


