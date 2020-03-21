import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item.interface';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

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
  cartItemsFinalPrice$: Observable<number>;
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService,
    private router: Router,
    private dialog: DialogService

  ) { }

  ngOnInit(): void {
  this.userId = this.authService.user._id;
  if (this.shoppingCartService.shoppingCart === null || this.shoppingCartService.shoppingCart._id === null) {
    this.router.navigate(['/home']);
    this.dialog.openDialog('massage', {massage: 'shopping cart not found'});
  }
  this.shoppingCartItems$ = this.shoppingCartItemsService.getShoppingCartItemsAsObservable();
  this.cartItemsFinalPrice$ = this.shoppingCartItemsService.getShoppingCartTotalPriceAsObservabel();

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
