import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/interfaces/order.interface';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  order: Order = {
    _id: null,
    user: null,
    shoppingCart: null,
    finalPrice: null,
    shippingCity: null,
    shppingStreet: null,
    shppingDate: null,
    creditCard: {
        cardNumber: null,
        expirationDate: null, // change to Date with MM/YY format
        cvv: null
    },
    purchaseDate: null,
  };
  user: User;
  shoppingCartItems$: Observable<ShoppingCartItem[]>;
  subscription: Subscription;
  minShippingDate: Date;
  cartItems: ShoppingCartItem[];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.shoppingCartItems$ = this.shoppingCartItemsService.getShoppingCartAsObservable();
    this.subscription =  this.shoppingCartItemsService.getShoppingCartAsObservable().subscribe(cartItem =>{
    this.cartItems = cartItem;
    });
    this.cartItems.find(c => {
      this.order.finalPrice += c.generalPrice;
    });
    this.order.shoppingCart = this.cartItems[0].shoppingCart;
    this.user = this.authService.user;
    this.order.shippingCity = this.user.city;
    this.order.user = this.user._id;
    this.order.shppingStreet = this.user.street;
    this.order.shippingCity = this.user.city;
    this.order.purchaseDate = new Date();
    this.minShippingDate = new Date();
  }
  UserOrder() {
    this.ordersService.userOrder(this.order);
  }
  shippingDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Friday from being selected.
    return day !== 5 && day !== 6;
  }
  ngOnDestroy(): void {
    if(this.subscription !== undefined){
      this.subscription.unsubscribe();
    }
  }
}
