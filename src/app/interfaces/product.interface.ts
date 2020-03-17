export interface Product {
    '_id': string;
    'name': string;
    'category': {
        '_id': string,
        'name': string
    };
    'price': number;
    'img': {
        'url': string,
        'name': string,
        'imgId': string
    };
}
