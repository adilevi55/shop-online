import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  unsubscribable: Subscription;
  userId: string;
  shoppingCart: ShoppingCart;
  shoppingCartItems: ShoppingCartItem[] = [];
  shoppingCartItems$: Observable<ShoppingCartItem[]>;
  cartItemsFinalPrice = 0;
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService

  ) { }

  ngOnInit(): void {
  this.userId = this.authService.user._id;
  if (this.shoppingCartService.shoppingCart === null ||
      this.shoppingCartService.shoppingCart._id === null) {
      this.shoppingCartService.creatShoppingCart(this.userId);
      this.shoppingCart = this.shoppingCartService.shoppingCart;
    } else {
      this.shoppingCart = this.shoppingCartService.shoppingCart;
      this.shoppingCartItemsService.getShoppingCartItems(this.shoppingCart._id);
    }
  this.shoppingCartItems$ = this.shoppingCartItemsService.getShoppingCartAsObservable();
  this.shoppingCartItemsService.getShoppingCartAsObservable().subscribe(cartItems => {
    cartItems.find(c => {
      this.cartItemsFinalPrice += c.generalPrice;
      });
  });
  }
  deleteCartItem(id) {
    this.shoppingCartItemsService.deleteCartItem(id);
  }
  deleteAllCartItems() {
    this.shoppingCartItemsService.deleteAllCartItems( this.shoppingCartService.shoppingCart._id);
  }
  ngOnDestroy(): void {
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }


}
