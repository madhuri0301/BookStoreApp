import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide:boolean = true;
  submitted:boolean = false;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nameFull: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]],
      service: ['advance', Validators.required]
  })
}
get f() { return this.registerForm.controls; }

submit(){
  this.submitted = true;

  if (this.registerForm.invalid) {
    return;
}
let data = { 
  fullName: this.registerForm.value.nameFull,
  userEmail: this.registerForm.value.email,
  password: this.registerForm.value.password,
  phoneNumber: this.registerForm.value.mobileNo,
  service:this.registerForm.value.service
}
console.log(data);
}
}
