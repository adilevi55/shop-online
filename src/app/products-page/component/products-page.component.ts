import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  subscription: Subscription;
  constructor(
    private productsService: ProductsService
  ) { }

   ngOnInit() {
    this.productsService.getAllProducts();
    this.products$ = this.productsService.getProductsAsObservable();
  }

  ngOnDestroy(): void {

  }

}
