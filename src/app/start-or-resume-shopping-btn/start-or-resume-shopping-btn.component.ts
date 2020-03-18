import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';

@Component({
  selector: 'app-start-or-resume-shopping-btn',
  templateUrl: './start-or-resume-shopping-btn.component.html',
  styleUrls: ['./start-or-resume-shopping-btn.component.css']
})
export class StartOrResumeShoppingBtnComponent implements OnInit, OnDestroy {
  @Input()userId: string;
  userOpenShoppingCart: ShoppingCart|null;
  unsubscribable: Subscription;
  constructor(
    private httpShoppingCart: ShoppingCartService

  ) { }
  ngOnInit(): void {
     this.httpShoppingCart
    .getUserOpenShoppingCartCreated(this.userId);
     this.unsubscribable = this.httpShoppingCart.shoppingCartListener.subscribe(shoppingCartCreatedDate => {
        this.userOpenShoppingCart = shoppingCartCreatedDate;
    });
  }
  ngOnDestroy(): void {
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }
}
