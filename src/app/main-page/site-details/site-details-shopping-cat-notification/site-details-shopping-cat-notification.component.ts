import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';


@Component({
  selector: 'app-site-details-shopping-cat-notification',
  templateUrl: './site-details-shopping-cat-notification.component.html',
  styleUrls: ['./site-details-shopping-cat-notification.component.css']
})
export class SiteDetailsShoppingCatNotificationComponent implements OnInit, OnDestroy {

  userLastOrder: Date|false;
  userOpenShoppingCartCreated: ShoppingCart|null = null;
  welcomeNewUserMessage = 'welcome gest';
  unsubscribable: Subscription;
  userId: string|null = null;
  constructor(
    private httpOrder: OrdersService,
    private httpShoppingCart: ShoppingCartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.unsubscribable =  this.authService.userListener.subscribe(user => {
      this.userId = user._id;
      if (this.userId !== null) {
      this.unsubscribable = this.httpShoppingCart.shoppingCartListener.subscribe(shoppingCart => {
        this.userOpenShoppingCartCreated = shoppingCart;
      });
      this.unsubscribable = this.httpOrder.getUserLastOrder(this.userId).subscribe(order => {
        this.userLastOrder = order;
      });
      }
    });
  }
  ngOnDestroy(): void {
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }

}
