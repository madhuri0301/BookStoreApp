import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { OrderComponent } from './Components/order/order.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path: "", component: LoginSignupComponent,
    children: [
      { path: 'register', component: SignUpComponent },
      { path: 'login', component: LoginComponent }
    ],
  },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: GetAllBooksComponent },
      { path: 'cart',component: CartComponent},
      { path: 'wishlist', component: WishlistComponent },
      { path: 'myprofile', component: MyprofileComponent }
      
      
    ],
  },
  {path: 'bookdetails', component: BookdetailsComponent},
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
