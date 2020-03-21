import { User } from './user.interface';

export interface ShoppingCart {
    '_id': string;
    'shoppingCartOpen': boolean;
    'user': User;
    'creationDate': Date;
}
export interface ShoppingCartCreatReq {
    'shoppingCartOpen': boolean;
    'user': string;
    'creationDate': Date;
}
