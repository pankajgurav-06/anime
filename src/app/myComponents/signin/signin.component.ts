import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

console.warn("This is lazy loading in signup")
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm !: FormGroup;
  user: any={}
  passwordMatchingValidation: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.createSignInForm();
  }
  

  createSignInForm(){
    this.signInForm = this.formBuilder.group({
      firstname : [null,Validators.required],
      lastname : [null,Validators.required],
      mobile_no: [null, [Validators.required,Validators.maxLength(10)]],
      email : [null,[Validators.required, Validators.email]],
      password : [null,[Validators.required, Validators.minLength(8)]],
    },{validators:this.passwordMatchingValidation});
  }


    onSubmit(){
      console.log(this.signInForm.value);
      this.user = Object.assign(this.user, this. signInForm.value);
      localStorage.setItem('Users',JSON.stringify(this.user));
    } 
  }

