export interface Order {
    '_id': string;
    'user': string;
    'shoppingCart': string;
    'finalPrice': number;
    'shippingCity': string;
    'shppingStreet': string;
    'shppingDate': Date;
    'creditCard': {
        'cardNumber': string,
        'expirationDate': string, // change to Date with MM/YY format
        'cvv': string
    };
    'purchaseDate': Date;
}
