import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profileDialogShown:boolean = false;
  userSignedOff:boolean = true;

  constructor(private route:Router) { }

  ngOnInit(): void {
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
    this.route.navigate(['dashboard/wishlist'])
  }
  myprofile(){
    this.route.navigate(['dashboard/myprofile'])
  }

}
