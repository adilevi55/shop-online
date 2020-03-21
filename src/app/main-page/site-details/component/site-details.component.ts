import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {
  $productsNumber: Observable<number>;
  $ordersNumber: Observable<number>;
  $userLastOrder: Observable<Date>;
  $userOpenShoppingCartCreatedDate: Observable<Date>;

  constructor(
    private httpProducts: ProductsService,
    private httpOrder: OrdersService,
    ) { }

  ngOnInit(): void {
  this.$productsNumber =   this.httpProducts.getProductsNumber();
  this.$ordersNumber =   this.httpOrder.getOrdersNumber();
 }

}
