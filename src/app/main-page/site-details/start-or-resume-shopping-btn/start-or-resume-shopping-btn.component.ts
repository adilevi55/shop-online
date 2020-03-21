import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { Router } from '@angular/router';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';

@Component({
  selector: 'app-start-or-resume-shopping-btn',
  templateUrl: './start-or-resume-shopping-btn.component.html',
  styleUrls: ['./start-or-resume-shopping-btn.component.css']
})
export class StartOrResumeShoppingBtnComponent implements OnInit, OnDestroy {
  @Input()userId: string;
  userOpenShoppingCart: ShoppingCart|null = null;
  unsubscribable: Subscription;
  constructor(
    private httpShoppingCart: ShoppingCartService,
    private router: Router,

  ) { }
  ngOnInit(): void {
    this.unsubscribable = this.httpShoppingCart
    .getShoppingCartAsObservable().subscribe(shoppingCartCreatedDate => {
        this.userOpenShoppingCart = shoppingCartCreatedDate;
        console.log(this.userOpenShoppingCart !== null);
        if(this.userOpenShoppingCart !== null){
          console.log(this.userOpenShoppingCart._id !== null);
          console.log(this.userOpenShoppingCart);
          console.log(this.userOpenShoppingCart._id);
        }
    });
  }
  userStartShopping() {
    this.httpShoppingCart.creatShoppingCart(this.userId);
    this.router.navigate(['/shopping-page']);
  }
  ngOnDestroy(): void {
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }
}
