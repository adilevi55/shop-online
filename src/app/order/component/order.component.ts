import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { CityService } from 'src/app/services/http/city.service';
import { City } from 'src/app/interfaces/city.interface';
import { OrderAddOrderReq } from 'src/app/interfaces/order.interface';
import { allMonthsInYear, getExpirationYears } from 'src/app/interfaces/all-months-in-year';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  orderAddOrderReq: OrderAddOrderReq = {
    _id: null,
    user: null,
    shoppingCart: null,
    finalPrice: null,
    shippingCity: null,
    shppingStreet: null,
    shppingDate: null,
    creditCard: {
        cardNumber: null,
        expirationDate: {
          month: null,
         year: null
        }, // change to Date with MM/YY format
        cvv: null
    },
    purchaseDate: null,
  };
  user: User;
  shoppingCartItems$: Observable<ShoppingCartItem[]>;
  subscription: Subscription;
  minShippingDate: Date;
  cartItems: ShoppingCartItem[];
  cities: City[];
  allMonthsInYear = allMonthsInYear;
  getExpirationYears = getExpirationYears;
  constructor(
    private shoppingCartItemsService: ShoppingCartItemsService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private cityService: CityService
  ) { }


  ngOnInit(): void {
    this.shoppingCartItems$ = this.shoppingCartItemsService.getShoppingCartItemsAsObservable();
    this.subscription =  this.shoppingCartItemsService.getShoppingCartItemsAsObservable().subscribe(cartItem => {
    this.cartItems = cartItem;
    });
    this.cartItems.find(c => {
      this.orderAddOrderReq.finalPrice += c.generalPrice;
    });
    this.subscription = this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
    });
    this.orderAddOrderReq.shoppingCart = this.cartItems[0].shoppingCart._id;
    this.user = this.authService.user;
    this.orderAddOrderReq.user = this.user._id;
    this.orderAddOrderReq.shppingStreet = this.user.street;
    this.orderAddOrderReq.shippingCity = this.user.city;
    this.orderAddOrderReq.purchaseDate = new Date();
    this.minShippingDate = new Date();
    this.orderAddOrderReq.shppingDate = new Date();
    this.orderAddOrderReq.shippingCity = this.user.city;
  }
  UserOrder() {
    this.ordersService.userOrder(this.orderAddOrderReq);
  }
  shippingDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Friday from being selected.
    return day !== 5 && day !== 6;
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
