import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product.interface';
import { CartItemAddToCart } from 'src/app/interfaces/shopping-cart-item.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCartItemsService } from 'src/app/services/shopping-cart-items.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit, OnDestroy {
  product: Product;
  cartItem: CartItemAddToCart =  {
product: null,
shoppingCart: null,
generalPrice: null,
quantity: null,
  };
  subscription: Subscription;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { payload: Product },
    private shoppingCartService: ShoppingCartService,
    private shoppingCartItemsService: ShoppingCartItemsService,
    private matDialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.product = this.data.payload;
    this.cartItem.product = this.product._id;
    this.subscription = this.shoppingCartService.shoppingCartListener.subscribe(shoppinCart => {
      this.cartItem.shoppingCart = shoppinCart._id;
    });

  }
  addToCart() {
    this.cartItem.generalPrice = this.product.price * this.cartItem.quantity;
    this.shoppingCartItemsService.addCartItem(this.cartItem);
    this.matDialog.closeAll();
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
