import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

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
    private httpShoppingCart: ShoppingCartService
    ) { }

  ngOnInit(): void {
  this.$productsNumber =   this.httpProducts.getProductsNumber();
  this.$ordersNumber =   this.httpOrder.getOrdersNumber();

  this.httpOrder.getUserLastOrder('5e6e8946c9f7a70004fc097c').subscribe(u => {
    console.log(u);
  });
  this.httpShoppingCart.getUserOpenShoppingCartCreatedDate('5e6e8946c9f7a70004fc097c').subscribe(u => {
    console.log(u);
  });

  }

}
