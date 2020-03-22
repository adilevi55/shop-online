import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';

@Component({
  selector: 'app-shopping-nav-bar',
  templateUrl: './shopping-nav-bar.component.html',
  styleUrls: ['./shopping-nav-bar.component.css']
})
export class ShoppingNavBarComponent implements OnInit, OnDestroy {
  numberOfCartItems = 0;
  subscription: Subscription;
  PanelOpenOrCluseArray = [false, false, false];

  constructor(
    private shoppingCartItemsService: ShoppingCartItemsService
  ) { }


  ngOnInit(): void {
    this.subscription = this.shoppingCartItemsService
      .getShoppingCartItemsAsObservable().subscribe(cartItems => {
        this.numberOfCartItems = cartItems.length;
      });
  }
  PanelOpenOrCluse(panelOpenOrCluseArrayIndex: number, otherPanelIndex, secondOtherPanelIndex) {
    if (this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] === false) {
         this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] = true;
    } else {
      this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] = false;
    }
    this.PanelOpenOrCluseArray[otherPanelIndex] = false;
    this.PanelOpenOrCluseArray[secondOtherPanelIndex] = false;
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
