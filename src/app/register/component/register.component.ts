import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/interfaces/user.interface';
import { City } from 'src/app/interfaces/city.interface';
import { CityService } from 'src/app/services/http/city.service';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserRegister = {
    firstName: null,
    lastName: null,
    email: null,
    password: '',
    phone: null,
    city: null,
    street: null,
    housNumber: null
  };
  cities: City[] = [];
  public passwordConfirm = '';

  constructor(
    private cityService: CityService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }
  register() {
    if (this.user.password === this.passwordConfirm) {
      console.log(this.user);
    this.authService.register(this.user);
    } else {
      
      alert('password not much');
      // change to error throw
    }

  }
}
