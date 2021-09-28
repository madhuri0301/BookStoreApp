import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import { CartService } from 'src/app/Services/cart.service';
import { CommunicateService } from 'src/app/Services/communicate.service';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  displayAddress = true;
  displayButton = true;
  displayCart = true;
  displayContinueButton = true;

  labelPosition: 'before' | 'after' = 'after';

  getBooks: Array<any> = [];
  getBook: any;
  addressDetails: any;
  address: any;
  removeById: any;
  token: any;
  length: any;

  public contactForm!: FormGroup;


  constructor(private cart: CartService, private router: Router, private formBuilder: FormBuilder, private communicate: CommunicateService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('Token')
    this.getCarts();

    this.contactForm = this.formBuilder.group({
      fullName: new FormControl(),
      phone: new FormControl(),
      fullAddress: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      addressType: new FormControl(),
    })
  }
  getCarts() {
    console.log("get cart api");
    this.cart.getCarts("bookstore_user/get_cart_items").subscribe((response: any) => {
      console.log(response);
      this.getBooks = response.result;
      console.log("returning data", this.getBooks);
      for (this.getBook of this.getBooks) {

        //  console.log("inside the forloop");

        console.log(this.getBook.product_id._id);

        for (let ad of this.getBook.user_id.address) {
          this.address = {
            "fullName": this.getBook.user_id.fullName,
            "phone": this.getBook.user_id.phone,
            "addressType": ad.addressType,
            "city": ad.city,
            "fullAddress": ad.fullAddress,
            "state": ad.state
          }

        }

      }
      this.communicate.communicateMessage(this.getBook.length);

      this.contactForm.patchValue({
        "fullName": this.address.fullName,
        "phone": this.address.phone,
        "addressType": this.address.addressType,
        "city": this.address.city,
        "fullAddress": this.address.fullAddress,
        "state": this.address.state
      })
      console.log(this.address);
    },
      error => {
        console.log(error);
      });
  }
  removeItem=(data: any)=>{
    // console.log(data._id)
    this.cart.deleteItem(data._id, this.token).subscribe((data:any)=>{
      this.getCarts()
    },
    error => {
      console.log(error);
    });
  }
  submit() {
    console.log(this.contactForm.value);
    let result = {
      "addressType": this.contactForm.value.addressType,
      "fullAddress": this.contactForm.value.fullAddress,
      "city": this.contactForm.value.city,
      "state": this.contactForm.value.state,
    }
    console.log(result);
    this.cart.putAddress(result, this.token).subscribe((data: any) => {
      console.log(data)
    },
      error => {
        console.log(error);
      }
    );
  
  }
}