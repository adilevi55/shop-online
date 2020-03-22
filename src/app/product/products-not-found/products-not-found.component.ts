import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-not-found',
  templateUrl: './products-not-found.component.html',
  styleUrls: ['./products-not-found.component.css']
})
export class ProductsNotFoundComponent {

  constructor(
    private productsService: ProductsService
  ) { }
  restoreProducts() {
    this.productsService.getAllProducts();
  }

}
