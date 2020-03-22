import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-product-nav-bar',
  templateUrl: './dialog-product-nav-bar.component.html',
  styleUrls: ['./dialog-product-nav-bar.component.css']
})
export class DialogProductNavBarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  categories: Category[];
  iconsArray = [
    {icon: faDrumstickBite},
    {icon: faFish},
    {icon: faCarrot},
    {icon: faCheese},
    {icon: faBeer},
    {icon: faGlassWhiskey},
    {icon: faCookieBite},
    {icon: faAppleAlt},
  ];
  faShoppingBasket = faShoppingBasket;
  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService,
    private matDialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.subscription = this.categoryService.getAllCategories()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  getProductCategory(categoryId: string) {
    this.productsService.getProductsByCategories(categoryId);
    this.matDialog.closeAll();
  }
  getAllProducts()  {
    this.productsService.getAllProducts();
    this.matDialog.closeAll();
  }
  userExitDialog() {
    this.matDialog.closeAll();
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}