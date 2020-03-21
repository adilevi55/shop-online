import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  searchProduct: string;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  searchProductFun() {
    this.productsService.searchProduct(this.searchProduct);
  }

}
