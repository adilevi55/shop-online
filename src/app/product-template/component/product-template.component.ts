import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent {
  @Input() products: Product[];
  constructor(
    private dialogService: DialogService
  ) { }
  addToCart(product) {
    this.dialogService.openDialog('product', product);
  }

}
