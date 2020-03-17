import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
@Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
