import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-add-update-product-phone',
  templateUrl: './add-update-product-phone.component.html',
  styleUrls: ['./add-update-product-phone.component.css']
})
export class  AddUpdateProductPhoneComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(
    private productsService: ProductsService,
    private dialogService: DialogService
  ) { }

   ngOnInit() {
    this.productsService.getAllProducts();
    this.products$ = this.productsService.getProductsAsObservable();
  }
  userOpenProductNavBarPanelDialog() {
    this.dialogService.openDialog('productNavBar');
  }
}
