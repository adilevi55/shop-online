import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, User, UserRegister } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartItemsService } from '../shopping-cart-items.service';
import { City } from 'src/app/interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  BASE_URL = 'https://shop-online-server.herokuapp.com/api/authentication/';
  LOGIN = this.BASE_URL + 'login';
  REGISTER = this.BASE_URL + 'register';
  user: User;
  userListener: BehaviorSubject<User> = new BehaviorSubject({
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    city: null,
    street: null,
    housNumber: null
  });
  constructor(
    private http: HttpClient,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    ) { }
    register(newUser: UserRegister) {
      this.http.post<User>(this.REGISTER, newUser).subscribe(user =>{
        this.user = user;
        this.isAuth = true;
        this.userListener.next(this.user);
        this.router.navigate(['/shopping-page']);
      })
     // all the commends must be in the register function
     
    }
  login(userLogin: UserLogin) {
    this.http.post<User>(this.LOGIN, userLogin).subscribe(user => {
      this.user = user;
      this.userListener.next(this.user);
      this.isAuth = true;
    });
  }
  getIsAuth(): boolean {
    return this.isAuth;
  }
  logOut(): void {
    this.userListener.next({
      _id: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phone: null,
      city: null,
      street: null,
      housNumber: null
    });
    this.isAuth = false;
    this.router.navigate(['/']);
    this.shoppingCartService.userLogOutDeleteShoppingCart();

  }


}
