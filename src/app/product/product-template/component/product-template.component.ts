import { Component, Input } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent {
  @Input() products: Product[];
  @Input() adminAuth: boolean;
  constructor(
    private dialogService: DialogService,
  ) { }
  addToCart(product) {
    this.dialogService.openDialog('product', product);
  }
  adminUpdateProduct(product) {
    this.dialogService.openDialog('updateProduct', product);
  }
}
