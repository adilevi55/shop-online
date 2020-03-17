import { Component, OnInit } from '@angular/core';
import { User, UserRegisterPasswordConfirm } from 'src/app/interfaces/user.interface';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: '',
    phone: null,
    city: null,
    street: null,
    housNumber: null
  };
  public passwordConfirm = '';

  constructor() { }

  ngOnInit(): void {

  }
  register(){
    if(this.user.password === this.passwordConfirm){
      console.log(this.user);
    } else{
      alert('password not much');
      //change to error throw
    }
  
  }
}
