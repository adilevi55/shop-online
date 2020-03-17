import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item.interface';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  BASE_URL = 'https://shop-online-server.herokuapp.com/api/shopping-cart/';
  OPEN_SHOPPING_CART = this.BASE_URL + 'open-shopping-cart/';
  ADD_SHOPPING_CART = this.BASE_URL + 'add';
  shoppingCart: ShoppingCart;
  shoppingCartListener: BehaviorSubject<ShoppingCart> = new BehaviorSubject({
    _id: null,
    shoppingCartOpen: null,
    user: null,
    creationDate: null,
  });
   constructor(private http: HttpClient) { }
   getUserOpenShoppingCartCreatedDate(userId): Observable<ShoppingCart> {
       return this.http.get<ShoppingCart>(this.OPEN_SHOPPING_CART + userId);
     }
    creatShoppingCart(userId: string): Observable<ShoppingCart> {
      const newShoppingCart: ShoppingCart = {
        _id: null,
        shoppingCartOpen: true,
        user: userId,
        creationDate: new Date()
      };
      return this.http.post<ShoppingCart>(this.ADD_SHOPPING_CART, newShoppingCart);
    }

 }
