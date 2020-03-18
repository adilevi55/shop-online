import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShoppingCart, ShoppingCartCreat } from '../interfaces/shopping-cart.interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item.interface';
import { ShoppingCartItemsService } from './shopping-cart-items.service';
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
   constructor(
     private http: HttpClient,
     private shoppingCartItemsService: ShoppingCartItemsService) { }
   getUserOpenShoppingCartCreated(userId) {
        this.http.get<ShoppingCart>(this.OPEN_SHOPPING_CART + userId).subscribe(shoppingCart => {
          this.shoppingCart = shoppingCart;
          this.shoppingCartListener.next(this.shoppingCart);
        });
     }
     async creatShoppingCart(userId: string) {
      const newShoppingCart: ShoppingCartCreat = {
        shoppingCartOpen: true,
        user: userId,
        creationDate: new Date()
      };
      await this.http.post<ShoppingCart>(this.ADD_SHOPPING_CART, newShoppingCart).subscribe(newShoppingCartFromDB => {
        this.shoppingCart = newShoppingCartFromDB;
        this.shoppingCartListener.next(this.shoppingCart);
      });
    }
    userLogOutDeleteShoppingCart() {
      this.shoppingCart = {
        _id: null,
        shoppingCartOpen: null,
        user: null,
        creationDate: null,
      };
      this.shoppingCartListener.next({
        _id: null,
        shoppingCartOpen: null,
        user: null,
        creationDate: null,
      });
      this.shoppingCartItemsService.userLogOutDeleteShoppingCartItems();

    }

 }
