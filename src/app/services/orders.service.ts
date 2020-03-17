import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

 BASE_URL = 'https://shop-online-server.herokuapp.com/api/order/';
 ALL_ORDER_NUMBER = this.BASE_URL + 'all-order-number';
 USER_LAST_ORDER = this.BASE_URL + 'last-user-order/';

  constructor(private http: HttpClient) { }
  getOrdersNumber(): Observable<number> {
      return this.http.get<number>(this.ALL_ORDER_NUMBER);
    }
  getUserLastOrder(userId: string): Observable<Date> {
    return this.http.get<Date>(this.USER_LAST_ORDER + userId);
  }
}
