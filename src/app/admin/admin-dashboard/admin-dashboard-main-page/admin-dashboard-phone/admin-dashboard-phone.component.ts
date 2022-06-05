import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { AdminService } from 'src/app/services/admin.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-admin-dashboard-phone',
  templateUrl: './admin-dashboard-phone.component.html',
  styleUrls: ['./admin-dashboard-phone.component.css']
})
export class AdminDashboardPhoneComponent implements OnInit {
  orderNumber$: Observable<number>;
  customersNumber$: Observable<number>;
  openShoppingCartNumber$: Observable<number>;
  topOrder$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private productsService: ProductsService,
    private adminService: AdminService,
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit(): void {
    this.orderNumber$ =  this.ordersService.getOrdersNumber();
    }

}
