import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartItem, CartItemAddToCartReq, CartItemUpadateReq } from '../interfaces/shopping-cart-item.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartItemsService {

  BASE_URL = environment.serverURL + 'shopping-cart-item/';
  UPDATE_QUANTITY = this.BASE_URL + 'quantity/';
  ADD_CART_ITEM = this.BASE_URL + 'add';
  DELETE_ALL_CARTS_ITEMS = this.BASE_URL + 'all-items/';
  shoppingCartItems: ShoppingCartItem[] = [];
  shoppingCartItemsListener: BehaviorSubject<ShoppingCartItem[]> = new BehaviorSubject([]);
  shoppingCartTotalPriceListener: BehaviorSubject<number> = new BehaviorSubject(0);
  shoppingCartTotalPrice = 0;
  constructor(private http: HttpClient) { }

  getShoppingCartTotalPrice() {
    this.shoppingCartItems.find(c => {
      this.shoppingCartTotalPrice += c.generalPrice;
    });
    this.shoppingCartTotalPriceListener.next(this.shoppingCartTotalPrice);
  }
  getShoppingCartTotalPriceAsObservabel() {
    return this.shoppingCartTotalPriceListener.asObservable();
  }
  getShoppingCartItems(shoppingCartId) {
    this.http.get<ShoppingCartItem[]>(this.BASE_URL + shoppingCartId).subscribe(shoppingcartItems => {
      this.shoppingCartItems = shoppingcartItems;
      this.shoppingCartItemsListener.next(this.shoppingCartItems);
      this.getShoppingCartTotalPrice();
    });
  }
  getShoppingCartItemsAsObservable() {
    return this.shoppingCartItemsListener.asObservable();
  }
  addCartItem(cartItem: CartItemAddToCartReq) {
    this.http.post<ShoppingCartItem>(this.ADD_CART_ITEM, cartItem).subscribe(newCartItem => {
      this.shoppingCartItems.push(newCartItem);
      this.shoppingCartItemsListener.next(this.shoppingCartItems);
      this.shoppingCartTotalPrice = this.shoppingCartTotalPrice + newCartItem.generalPrice;
      this.shoppingCartTotalPriceListener.next(this.shoppingCartTotalPrice);
    });
  }
  deleteAllCartItems(shoppingCartId: string) {
    this.http.delete(this.DELETE_ALL_CARTS_ITEMS + shoppingCartId).subscribe(() => {
      this.shoppingCartItems = [];
      this.shoppingCartItemsListener.next(this.shoppingCartItems);
      this.shoppingCartTotalPrice = 0;
      this.shoppingCartTotalPriceListener.next(this.shoppingCartTotalPrice);
    });
  }

  deleteCartItem(cartItemId: string, cartItemPrice: number) {
    console.log(this.shoppingCartItems);
    this.http.delete(this.BASE_URL + cartItemId).subscribe(() => {
      const newShoppingCart = this.shoppingCartItems.filter(i => i._id !== cartItemId);
      this.shoppingCartItems = newShoppingCart;
      console.log(this.shoppingCartItems);
      this.shoppingCartItemsListener.next(this.shoppingCartItems);
      this.shoppingCartTotalPrice = this.shoppingCartTotalPrice - cartItemPrice;
      this.shoppingCartTotalPriceListener.next(this.shoppingCartTotalPrice);
    });
  }
  updateQuantityCartItem(cartItem: CartItemUpadateReq) {
    console.log(cartItem);

    this.http.put<ShoppingCartItem>(this.UPDATE_QUANTITY + cartItem._id, cartItem).subscribe(newCartItem => {

      //bad logic
      this.shoppingCartItems.forEach((c,index) => {
        
        if (c._id === cartItem._id) {
          this.shoppingCartItems[index] = newCartItem;
        }
      });
      this.shoppingCartItemsListener.next(this.shoppingCartItems);
      this.shoppingCartTotalPrice = 0;
      this.getShoppingCartTotalPrice();
    });
  }
  userLogOutDeleteShoppingCartItems() {
    this.shoppingCartItems = [];
    this.shoppingCartItemsListener.next([]);
  }
}
