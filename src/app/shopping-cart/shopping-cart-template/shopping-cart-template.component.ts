import { Component, Input } from '@angular/core';
import { ShoppingCartItem, CartItemUpadateReq } from 'src/app/interfaces/shopping-cart-item.interface';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';

@Component({
  selector: 'app-shopping-cart-template',
  templateUrl: './shopping-cart-template.component.html',
  styleUrls: ['./shopping-cart-template.component.css']
})
export class ShoppingCartTemplateComponent {
 @Input() shoppingCartItems: ShoppingCartItem[];
@Input() orderShoppingCart: boolean;
  cartItemTemp: CartItemUpadateReq = {
    _id: null,
    product: null,
    shoppingCart: null,
    generalPrice: null,
    quantity: null,
  };
  constructor(
    private shoppingCartItemService: ShoppingCartItemsService
  ) { }

  deleteCartItem(cartItemId: string, itemPrice: number) {
    this.shoppingCartItemService.deleteCartItem(cartItemId, itemPrice);
  }
  convertCartItemToUpdateCartItem(cartItem: ShoppingCartItem) {
    // tslint:disable-next-line: prefer-const
    this.cartItemTemp._id = cartItem._id;
    this.cartItemTemp.product = cartItem.product._id;
    this.cartItemTemp.quantity = cartItem.quantity;
    this.cartItemTemp.shoppingCart = cartItem.shoppingCart._id;

    const generalPrice = cartItem.product.price * cartItem.quantity;
    this.cartItemTemp.generalPrice = generalPrice;

    this.shoppingCartItemService.updateQuantityCartItem(this.cartItemTemp);
  }
  userChangeCartItemQuantity(cartItem: ShoppingCartItem) {
    this.convertCartItemToUpdateCartItem(cartItem);
  }

  userAddOneQuantity(cartItem: ShoppingCartItem) {
    cartItem.quantity = ++cartItem.quantity;
    this.convertCartItemToUpdateCartItem(cartItem);

  }

  userRemoveOneQuantity(cartItem: ShoppingCartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity = --cartItem.quantity;
      this.convertCartItemToUpdateCartItem(cartItem);
    }

 }
}
