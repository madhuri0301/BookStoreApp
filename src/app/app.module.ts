import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';

import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './Components/cart/cart.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';
import { HeaderComponent } from './Components/header/header.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderComponent } from './Components/order/order.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { SearchBookPipe } from './Pipe/search-book.pipe';
import { StarComponent } from './Components/star/star.component'
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    GetAllBooksComponent,

    CartComponent,
    BookdetailsComponent,
    HeaderComponent,
    OrderComponent,
    WishlistComponent,
    MyprofileComponent,
    PersonalDetailsComponent,
    SearchBookPipe,
    StarComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
