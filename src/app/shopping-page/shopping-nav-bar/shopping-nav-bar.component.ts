import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-shopping-nav-bar',
  templateUrl: './shopping-nav-bar.component.html',
  styleUrls: ['./shopping-nav-bar.component.css']
})
export class ShoppingNavBarComponent implements OnInit, OnDestroy {
  numberOfCartItems = 0;
  subscription: Subscription;
  PanelOpenOrCluseArray = [false, false];

  constructor(
    private shoppingCartItemsService: ShoppingCartItemsService,
    private dialogService: DialogService
  ) { }


  ngOnInit(): void {
    this.subscription = this.shoppingCartItemsService
      .getShoppingCartItemsAsObservable().subscribe(cartItems => {
        this.numberOfCartItems = cartItems.length;
      });
  }
  PanelOpenOrCluse(panelOpenOrCluseArrayIndex: number, otherPanelIndex) {
    if (this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] === false) {
         this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] = true;
    } else {
      this.PanelOpenOrCluseArray[panelOpenOrCluseArrayIndex] = false;
    }
    this.PanelOpenOrCluseArray[otherPanelIndex] = false;
  }
  userOpenProductNavBarPanelDialog() {
    this.dialogService.openDialog('productNavBar');
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
