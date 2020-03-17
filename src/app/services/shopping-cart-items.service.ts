import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item.interface';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartItemsService {

  BASE_URL = 'https://shop-online-server.herokuapp.com/api/shopping-cart-item/';
  ADD_CART_ITEM = this.BASE_URL + 'add';
  DELETE_ALL_CARTS_ITEMS = this.BASE_URL + 'all-items/';
  shoppingCart: ShoppingCartItem[];
  shoppingCartListener: BehaviorSubject<ShoppingCartItem[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }

  getShoppingCartItems(shoppingCartId) {
    this.http.get<ShoppingCartItem[]>(this.BASE_URL + shoppingCartId).subscribe(shoppingcartItems => {
      this.shoppingCart = shoppingcartItems;
      this.shoppingCartListener.next(this.shoppingCart);
    });
  };
  getShoppingCartAsObservable() {
    return this.shoppingCartListener.asObservable();
  }
  addCartItem(cartItem: ShoppingCartItem) {
    this.http.post<ShoppingCartItem>(this.ADD_CART_ITEM, cartItem).subscribe(newCartItem => {
      this.shoppingCart.push(newCartItem);
      this.shoppingCartListener.next(this.shoppingCart);
    });
  }
  deleteAllCartItems(shoppingCartId: string) {
    this.http.delete(this.DELETE_ALL_CARTS_ITEMS + shoppingCartId).subscribe(() => {
      this.shoppingCart = [];
      this.shoppingCartListener.next(this.shoppingCart);
    });
  }

  deleteCartItem(cartItemId: string) {
    this.http.delete(this.BASE_URL + cartItemId).subscribe(() => {
      const newShoppingCart = this.shoppingCart.filter(i => i._id !== cartItemId);
      this.shoppingCart = newShoppingCart;
      this.shoppingCartListener.next(this.shoppingCart);
    });
  }
}
