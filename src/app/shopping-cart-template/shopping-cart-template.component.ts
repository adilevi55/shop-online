import { Component, Input } from '@angular/core';
import { ShoppingCartItem } from 'src/app/interfaces/shopping-cart-item.interface';
import { ShoppingCartItemsService } from '../services/shopping-cart-items.service';

@Component({
  selector: 'app-shopping-cart-template',
  templateUrl: './shopping-cart-template.component.html',
  styleUrls: ['./shopping-cart-template.component.css']
})
export class ShoppingCartTemplateComponent {
 @Input() shoppingCartItems: ShoppingCartItem[];
@Input() orderShoppingCart: boolean;
  constructor(
    private shoppingCartItemService: ShoppingCartItemsService
  ) { }

  deleteCartItem(cartItemId) {
    this.shoppingCartItemService.deleteCartItem(cartItemId);
  }

}
