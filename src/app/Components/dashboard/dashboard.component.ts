import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  
}


