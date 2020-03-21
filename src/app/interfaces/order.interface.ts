import { User } from './user.interface';
import { ShoppingCart } from './shopping-cart.interface';

export interface OrderAddOrderReq {
    '_id': string;
    'user': string;
    'shoppingCart': string;
    'finalPrice': number;
    'shippingCity': string;
    'shppingStreet': string;
    'shppingDate': Date;
    'creditCard': {
        'cardNumber': string,
        'expirationDate': {
            'month': string,
            'year': string
        },
        'cvv': string
    };
    'purchaseDate': Date;
}
export interface Order {
    '_id': string;
    'user': User;
    'shoppingCart': ShoppingCart;
    'finalPrice': number;
    'shippingCity': string;
    'shppingStreet': string;
    'shppingDate': Date;
    'creditCard': {
        'cardNumber': string,
        'expirationDate': {
            'month': string,
            'year': string
        },
        'cvv': string
    };
    'purchaseDate': Date;
}
