import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';
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
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService

  ) { }


  ngOnInit(): void {
  this.userId = this.authService.user._id;
  this.unsubscribable = this.shoppingCartService.getUserOpenShoppingCartCreatedDate(this.userId).subscribe(res => {
    if (res === null) {
      this.shoppingCartService.creatShoppingCart(this.userId).subscribe(newShoppingCart => {
        this.shoppingCart = newShoppingCart;
      });
    } else {
      this.shoppingCart = res;
    }
    this.shoppingCartItemsService.getShoppingCartItems(this.shoppingCart._id);
    this.shoppingCartItemsService.shoppingCartListener.subscribe(cartItems => {
      this.shoppingCartItems = cartItems;
    });
  });
  }
  deleteCartItem(id) {
    this.shoppingCartItemsService.deleteCartItem(id);
  }
  deleteAllCartItems() {
    this.shoppingCartItemsService.deleteAllCartItems(this.shoppingCart._id);
  }
  ngOnDestroy(): void {
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }


}
