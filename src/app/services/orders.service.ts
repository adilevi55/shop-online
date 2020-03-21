import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderAddOrderReq } from '../interfaces/order.interface';
import { ShoppingCartService } from './shopping-cart.service';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

 BASE_URL = 'https://shop-online-server.herokuapp.com/api/order/';
 ALL_ORDER_NUMBER = this.BASE_URL + 'all-order-number';
 USER_LAST_ORDER = this.BASE_URL + 'last-user-order/';
 USER_ORDER = this.BASE_URL + 'add';

  constructor(
    private http: HttpClient,
    private shoppingCartService: ShoppingCartService,
    private dialogService: DialogService,

    ) { }
  getOrdersNumber(): Observable<number> {
      return this.http.get<number>(this.ALL_ORDER_NUMBER);
    }
  getUserLastOrder(userId: string): Observable<Date> {
    return this.http.get<Date>(this.USER_LAST_ORDER + userId);
  }
  userOrder(order: OrderAddOrderReq) {
    this.http.post<Order>(this.USER_ORDER, order).subscribe(() => {
      this.shoppingCartService.userLogOutDeleteShoppingCart();
      this.dialogService.openDialog('orderMassageSuccess');
    });

  }
}
