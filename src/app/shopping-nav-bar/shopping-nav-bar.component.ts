import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartItemsService } from '../services/shopping-cart-items.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartItem } from '../interfaces/shopping-cart-item.interface';

@Component({
  selector: 'app-shopping-nav-bar',
  templateUrl: './shopping-nav-bar.component.html',
  styleUrls: ['./shopping-nav-bar.component.css']
})
export class ShoppingNavBarComponent implements OnInit, OnDestroy {
  numberOfCartItems = 0;
  subscription: Subscription;
  productMenuPanelOpenState = false;
  searchPanelOpenState = false;
  shoppingCartPanelOpenState = false;


  constructor(
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService
  ) { }


  ngOnInit(): void {
     this.subscription = this.shoppingCartItemsService
     .getShoppingCartAsObservable().subscribe(cartItems => {
       this.numberOfCartItems = cartItems.length;
     });
  }
  PanelOpenOrCluse(PanelNme){
    
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
