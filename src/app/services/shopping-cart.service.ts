import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart, ShoppingCartCreatReq } from '../interfaces/shopping-cart.interface';
import { ShoppingCartItemsService } from './shopping-cart-items.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  BASE_URL = environment.serverURL + 'shopping-cart/';

  OPEN_SHOPPING_CART = this.BASE_URL + 'open-shopping-cart/';
  ADD_SHOPPING_CART = this.BASE_URL + 'add';
  shoppingCart: ShoppingCart = {
    _id: null,
    shoppingCartOpen: null,
    user: null,
    creationDate: null,
  };
  shoppingCartListener: BehaviorSubject<ShoppingCart> = new BehaviorSubject({
    _id: null,
    shoppingCartOpen: null,
    user: null,
    creationDate: null,
  });
  constructor(
    private http: HttpClient,
    private shoppingCartItemsService: ShoppingCartItemsService,
  ) { }
  getUserOpenShoppingCartCreated(userId) {
    this.http.get<ShoppingCart>(this.OPEN_SHOPPING_CART + userId).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.shoppingCartListener.next(this.shoppingCart);
    });
  }

  checkIfUserHasOpenShoppingCart(userId: string) {
    // bad logic
    this.http.get<ShoppingCart>(this.OPEN_SHOPPING_CART + userId).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.shoppingCartListener.next(this.shoppingCart);
      if (this.shoppingCart === null ||
        this.shoppingCart._id === null) {
        this.creatShoppingCart(userId);
        this.shoppingCart = this.shoppingCart;
      } else {
        this.shoppingCart = this.shoppingCart;
        this.shoppingCartItemsService.getShoppingCartItems(this.shoppingCart._id);
      }
    });
  }

  creatShoppingCart(userId: string) {
    const newShoppingCart: ShoppingCartCreatReq = {
      shoppingCartOpen: true,
      user: userId,
      creationDate: new Date()
    };
    this.http.post<ShoppingCart>(this.ADD_SHOPPING_CART, newShoppingCart).subscribe(newShoppingCartFromDB => {
      this.shoppingCart = newShoppingCartFromDB;
      this.shoppingCartListener.next(this.shoppingCart);
    });
  }
  getShoppingCartAsObservable() {
    return this.shoppingCartListener.asObservable();
  }
  userLogOutDeleteShoppingCart() {
    this.shoppingCart = {
      _id: null,
      shoppingCartOpen: null,
      user: null,
      creationDate: null,
    };
    this.shoppingCart = null;
    this.shoppingCartListener.next({
      _id: null,
      shoppingCartOpen: null,
      user: null,
      creationDate: null,
    });
    this.shoppingCartItemsService.userLogOutDeleteShoppingCartItems();

  }

}
