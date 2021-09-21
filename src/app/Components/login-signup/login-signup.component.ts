import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  signupShown:boolean = true;


  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  showSignup(){
    this.signupShown = true;
    this.router.navigateByUrl('homepage/register');
  }
  showLogin(){
    this.signupShown = false;
    this.router.navigateByUrl('homepage/login');
  }

}
