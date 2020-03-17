export interface ShoppingCartItem {
    '_id': string;
    'product': {
        'name': string,
        'category': {
            '_id': string,
            'name': string
        },
        'price': number,
        'img': {
            'url': string,
            'name': string,
            'imgId': string
        }
    };
    'shoppingCart': string;
    'generalPrice': number;
    'quantity': number;
 }
