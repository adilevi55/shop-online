import { Product } from './product.interface';
import { ShoppingCart } from './shopping-cart.interface';

export interface ShoppingCartItem {
    '_id': string;
    'product': Product;
    'shoppingCart': ShoppingCart;
    'generalPrice': number;
    'quantity': number;
 }

export interface CartItemAddToCartReq {
    'product': string;
    'shoppingCart': string;
    'generalPrice': number;
    'quantity': number;
 }
export interface CartItemUpadateReq {
    '_id': string;
    'product': string;
    'shoppingCart': string;
    'generalPrice': number;
    'quantity': number;
 }

