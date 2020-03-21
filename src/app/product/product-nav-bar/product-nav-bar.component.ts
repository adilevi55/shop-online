import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService
  ) { }


  ngOnInit(): void {
    this.subscription = this.categoryService.getAllCategories()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  getProductCategory(categoryId: string) {
    this.productsService.getProductsByCategories(categoryId);
  }
  getAllProducts()  {
    this.productsService.getAllProducts();
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}
